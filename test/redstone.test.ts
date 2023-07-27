import { ethers, waffle } from 'hardhat'
import { BigNumber, BigNumberish, constants, Contract } from 'ethers'
import chai from 'chai'
import { expect } from 'chai'
import { fixture, hypervisorTestFixture } from "./shared/fixtures"
import { solidity } from "ethereum-waffle"
import { WrapperBuilder } from "@redstone-finance/evm-connector";
import { SimpleNumericMockWrapper } from "@redstone-finance/evm-connector/dist/src/wrappers/SimpleMockNumericWrapper";

const MOCKING_PRECISION = Math.pow(10,10);

chai.use(solidity)

import {
    FeeAmount,
    TICK_SPACINGS,
    encodePriceSqrt,
    getPositionKey,
    getMinTick,
    getMaxTick
} from './shared/utilities'

import {
    IUniswapV3Factory,
    IUniswapV3Pool,
    HypervisorFactory,
    Hypervisor,
    TestERC20
} from "../typechain"

const createFixtureLoader = waffle.createFixtureLoader

describe('Hypervisor', () => {
    const [wallet, alice, bob, carol, other,
           user0, user1, user2, user3, user4] = waffle.provider.getWallets()

    let factory: IUniswapV3Factory
    let token0: TestERC20
    let token1: TestERC20
    let token2: TestERC20
    let tokenD8: TestERC20
    let uniswapPool: IUniswapV3Pool
    let uniswapPool02: IUniswapV3Pool
    let hypervisorFactory: HypervisorFactory
    let hypervisor: Hypervisor
    let hypervisor02: Hypervisor

    let loadFixture: ReturnType<typeof createFixtureLoader>
    before('create fixture loader', async () => {
        loadFixture = createFixtureLoader([wallet, other])
    })

    beforeEach('deploy contracts', async () => {
        ({ token0, token1, token2, factory, hypervisorFactory } = await loadFixture(hypervisorTestFixture))
        
        const tokenFactoryD8 = await ethers.getContractFactory('TestERC20D8')
        tokenD8 = (await tokenFactoryD8.deploy(BigNumber.from(2).pow(255))) as TestERC20

        await hypervisorFactory.createHypervisor(token0.address, token1.address, FeeAmount.MEDIUM,"Test Visor", "TVR");
        const hypervisorAddress = await hypervisorFactory.getHypervisor(token0.address, token1.address, FeeAmount.MEDIUM)
        hypervisor = (await ethers.getContractAt('Hypervisor', hypervisorAddress)) as Hypervisor

        const poolAddress = await factory.getPool(token0.address, token1.address, FeeAmount.MEDIUM)
        uniswapPool = (await ethers.getContractAt('IUniswapV3Pool', poolAddress)) as IUniswapV3Pool
        await uniswapPool.initialize(encodePriceSqrt('1', '1'))

        // adding extra liquidity into pool to make sure there's always
        // someone to swap with
        await token0.mint(carol.address, ethers.utils.parseEther('1000000000000'))
        await token1.mint(carol.address, ethers.utils.parseEther('1000000000000'))

        await token0.mint(uniswapPool.address, ethers.utils.parseEther('1000000'))
        await token1.mint(uniswapPool.address, ethers.utils.parseEther('1000000'))

        // pool with difference decimals
        await hypervisorFactory.createHypervisor(token0.address, tokenD8.address, FeeAmount.MEDIUM, "Test Visor 02", "TVR02");
        const hypervisorAddress02 = await hypervisorFactory.getHypervisor(token0.address, tokenD8.address, FeeAmount.MEDIUM);
        hypervisor02 = (await ethers.getContractAt('Hypervisor', hypervisorAddress02)) as Hypervisor
        const pool02Address = await factory.getPool(token0.address, tokenD8.address, FeeAmount.MEDIUM)
        uniswapPool02 = (await ethers.getContractAt('IUniswapV3Pool', pool02Address)) as IUniswapV3Pool
        await uniswapPool02.initialize(encodePriceSqrt('1', '10000000000'))

        await token0.mint(uniswapPool02.address, ethers.utils.parseEther('1000000'))
        await tokenD8.mint(uniswapPool02.address, '100000000000000')
    })

    it("Should get the price directly from Oracle contract", async function () {
        const Oracle = await ethers.getContractFactory("RedstoneOracle");
        const oracle = await Oracle.deploy();
        await oracle.deployed();
        await oracle.connect(wallet).setPriceFeedId(token0.address, token1.address, "usdc.dai");
    
        const wrappedContract =
          WrapperBuilder.wrap(oracle).usingSimpleNumericMock({
              mockSignersCount: 10,
              dataPoints: [
              { dataFeedId: "usdc.dai", value: 1 * MOCKING_PRECISION },
              ],
          });
  
        let price = await wrappedContract.extractPrice(token0.address, token1.address);
        console.log("Price directly from oracle: " + price.toString());
    });
  
    it("Should get the price from Redstone Oracles via Clearing", async function () {
        const Oracle = await ethers.getContractFactory("RedstoneOracle");
        const oracle = await Oracle.deploy();
        await oracle.deployed();
        await oracle.connect(wallet).setPriceFeedId(token0.address, token1.address, "usdc.dai");

        const Clearing = await ethers.getContractFactory("Clearing");
        const clearing = await Clearing.deploy(oracle.address);
        await clearing.deployed();
  
        
        const redstonePayload = await (new SimpleNumericMockWrapper({
            mockSignersCount: 10,
            dataPoints: [
              {dataFeedId: "usdc.dai", value: 1 * MOCKING_PRECISION}
            ],
          }).getBytesDataForAppending());  
    
        let price = await clearing.getPriceFromRedstoneOracle(hypervisor.address, `0x${redstonePayload}`);
        console.log("Price via Clearing: " + price.toString());
    });

    it("Should successfully deposit", async function () {
        const Oracle = await ethers.getContractFactory("RedstoneOracle");
        const oracle = await Oracle.deploy();
        await oracle.deployed();
        await oracle.connect(wallet).setPriceFeedId(token0.address, token1.address, "usdc.dai");

        const Clearing = await ethers.getContractFactory("Clearing");
        const clearing = await Clearing.deploy(oracle.address);
        await clearing.deployed();

        const UniProxy = await ethers.getContractFactory("UniProxy");
        const uniProxy = await UniProxy.deploy(clearing.address);
        await uniProxy.deployed();

        //Add position
        await clearing.connect(wallet).addPosition(hypervisor.address, 4);
        await clearing.connect(wallet).setOracleCheckEnabled(hypervisor.address, true);
        await clearing.connect(wallet).setTwapOverride(hypervisor.address, 1, 1010);

        //Mint tokens and set allowances
        await token0.mint(alice.address, ethers.utils.parseEther('1000000'))
        await token1.mint(alice.address, ethers.utils.parseEther('1000000'))
        await token0.connect(alice).approve(hypervisor.address, ethers.utils.parseEther('1000000'))
        await token1.connect(alice).approve(hypervisor.address, ethers.utils.parseEther('1000000'))
        await token0.connect(alice).approve(uniProxy.address, ethers.utils.parseEther('1000000'))
        await token1.connect(alice).approve(uniProxy.address, ethers.utils.parseEther('1000000'))
        
        //Whitelist proxy
        await hypervisor.setWhitelist(uniProxy.address);

        //Prepare payload with prices
        const redstonePayload = await (new SimpleNumericMockWrapper({
            mockSignersCount: 10,
            dataPoints: [
              {dataFeedId: "usdc.dai", value: 1.006 * MOCKING_PRECISION}
            ],
          }).getBytesDataForAppending()); 

        //Deposit
        await uniProxy.connect(alice).deposit(
            ethers.utils.parseEther('1000'),
            ethers.utils.parseEther('1000'),
            alice.address,
            hypervisor.address,
            [0,0,0,0],
            `0x${redstonePayload}`
        );
    });

    it("Should successfully deposit in case of different decimals", async function () {
      const Oracle = await ethers.getContractFactory("RedstoneOracle");
      const oracle = await Oracle.deploy();
      await oracle.deployed();
      await oracle.connect(wallet).setPriceFeedId(token0.address, tokenD8.address, "eth.usdc");

      const Clearing = await ethers.getContractFactory("Clearing");
      const clearing = await Clearing.deploy(oracle.address);
      await clearing.deployed();

      const UniProxy = await ethers.getContractFactory("UniProxy");
      const uniProxy = await UniProxy.deploy(clearing.address);
      await uniProxy.deployed();

      //Add position
      await clearing.connect(wallet).addPosition(hypervisor02.address, 4);
      await clearing.connect(wallet).setOracleCheckEnabled(hypervisor02.address, true);
      await clearing.connect(wallet).setTwapOverride(hypervisor02.address, 1, 1010);

      //Mint tokens and set allowances
      await token0.mint(alice.address, ethers.utils.parseEther('1000000'))
      await tokenD8.mint(alice.address, ethers.utils.parseEther('1000000'))
      await token0.connect(alice).approve(hypervisor02.address, ethers.utils.parseEther('1000000'))
      await tokenD8.connect(alice).approve(hypervisor02.address, ethers.utils.parseEther('1000000'))
      await token0.connect(alice).approve(uniProxy.address, ethers.utils.parseEther('1000000'))
      await tokenD8.connect(alice).approve(uniProxy.address, ethers.utils.parseEther('1000000'))
      
      //Whitelist proxy
      await hypervisor02.setWhitelist(uniProxy.address);

      //Prepare payload with prices
      const redstonePayload = await (new SimpleNumericMockWrapper({
          mockSignersCount: 10,
          dataPoints: [
            {dataFeedId: "eth.usdc", value: 1.006 * MOCKING_PRECISION}
          ],
        }).getBytesDataForAppending()); 

      //Deposit
      await uniProxy.connect(alice).deposit(
        ethers.utils.parseEther('1000'),
        ethers.utils.parseEther('1000'),
        alice.address,
        hypervisor02.address,
        [0,0,0,0],
        `0x${redstonePayload}`
      )
  });

  it("Should revert when the price deviates too much from Oracle", async function () {
    const Oracle = await ethers.getContractFactory("RedstoneOracle");
    const oracle = await Oracle.deploy();
    await oracle.deployed();
    await oracle.connect(wallet).setPriceFeedId(token0.address, token1.address, "usdc.dai");

    const Clearing = await ethers.getContractFactory("Clearing");
    const clearing = await Clearing.deploy(oracle.address);
    await clearing.deployed();

    const UniProxy = await ethers.getContractFactory("UniProxy");
    const uniProxy = await UniProxy.deploy(clearing.address);
    await uniProxy.deployed();

    //Add position
    await clearing.connect(wallet).addPosition(hypervisor.address, 4);
    await clearing.connect(wallet).setOracleCheckEnabled(hypervisor.address, true);
    await clearing.connect(wallet).setTwapOverride(hypervisor.address, 1, 1010);

    //Mint tokens and set allowances
    await token0.mint(alice.address, ethers.utils.parseEther('1000000'))
    await token1.mint(alice.address, ethers.utils.parseEther('1000000'))
    await token0.connect(alice).approve(hypervisor.address, ethers.utils.parseEther('1000000'))
    await token1.connect(alice).approve(hypervisor.address, ethers.utils.parseEther('1000000'))
    await token0.connect(alice).approve(uniProxy.address, ethers.utils.parseEther('1000000'))
    await token1.connect(alice).approve(uniProxy.address, ethers.utils.parseEther('1000000'))
    
    //Whitelist proxy
    await hypervisor.setWhitelist(uniProxy.address);

    //Prepare payload with prices
    const redstonePayload = await (new SimpleNumericMockWrapper({
        mockSignersCount: 10,
        dataPoints: [
          {dataFeedId: "usdc.dai", value: 1.1 * MOCKING_PRECISION}
        ],
      }).getBytesDataForAppending()); 

    //Deposit
    await expect(uniProxy.connect(alice).deposit(
        ethers.utils.parseEther('1000'),
        ethers.utils.parseEther('1000'),
        alice.address,
        hypervisor.address,
        [0,0,0,0],
        `0x${redstonePayload}`
    )).to.be.revertedWith("Too large deviation from oracle price");
  });   

})
