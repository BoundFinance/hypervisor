import { ethers, waffle } from 'hardhat'
import { BigNumber, BigNumberish, constants } from 'ethers'
import chai from 'chai'
import { expect } from 'chai'
import { fixture, tokeHypervisorTestFixture } from "./shared/fixtures"
import { solidity } from "ethereum-waffle"

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
    ISwapRouter,
    IUniswapV3Factory,
    IUniswapV3Pool,
    TokeHypervisorFactory,
    TokeHypervisor,
    TestERC20
} from "../typechain"

const createFixtureLoader = waffle.createFixtureLoader

describe('Tokemak', () => {
    const [wallet, alice, manager, carol, other,
           user0, user1, user2, user3, user4] = waffle.provider.getWallets()

    const minSqrtPrice = 4295128740;
    const maxSqrtPrice = 1461446703485210103287273052203988822378723970341;

    let factory: IUniswapV3Factory
    let router: ISwapRouter
    let token0: TestERC20
    let token1: TestERC20
    let token2: TestERC20
    let uniswapPool: IUniswapV3Pool
    let tokeHypervisorFactory: TokeHypervisorFactory
    let tokeHypervisor: TokeHypervisor

    let loadFixture: ReturnType<typeof createFixtureLoader>
    before('create fixture loader', async () => {
        loadFixture = createFixtureLoader([wallet, other])
    })

    beforeEach('deploy contracts', async () => {
        ({ token0, token1, token2, factory, router, tokeHypervisorFactory } = await loadFixture(tokeHypervisorTestFixture))
        await tokeHypervisorFactory.createHypervisor(token0.address, token1.address, FeeAmount.MEDIUM,"Test Visor", "TVR");
        const tokeHypervisorAddress = await tokeHypervisorFactory.getHypervisor(token0.address, token1.address, FeeAmount.MEDIUM)
        tokeHypervisor = (await ethers.getContractAt('TokeHypervisor', tokeHypervisorAddress)) as TokeHypervisor

        const poolAddress = await factory.getPool(token0.address, token1.address, FeeAmount.MEDIUM)
        uniswapPool = (await ethers.getContractAt('IUniswapV3Pool', poolAddress)) as IUniswapV3Pool
        await uniswapPool.initialize(encodePriceSqrt('1', '1'))
        await tokeHypervisor.setDepositMax(ethers.utils.parseEther('100000'), ethers.utils.parseEther('100000'))

        // adding extra liquidity into pool to make sure there's always
        // someone to swap with
        await token0.mint(carol.address, ethers.utils.parseEther('1000000000000'))
        await token1.mint(carol.address, ethers.utils.parseEther('1000000000000'))
    })

    it('tokemak deposit & withdraw', async () => {
        let uniProxyFactory = await ethers.getContractFactory('UniProxy')
        
        // alice is manager
        let uniProxy = (await uniProxyFactory.connect(manager).deploy())
        let owner = await uniProxy.owner();
        // expect(owner).to.equal(manager.address);
        // await uniProxy.connect(manager).addPosition(hypervisor.address, 2);

        // deploy GammaController
        let gammaControllerFactory = await ethers.getContractFactory('GammaController')
        let gammaController = await (gammaControllerFactory.connect(manager).deploy(
            manager.address, manager.address, uniProxy.address
        ))

        await token0.mint(manager.address, ethers.utils.parseEther('1000000'))
        await token1.mint(manager.address, ethers.utils.parseEther('1000000'))

        await token0.connect(manager).approve(tokeHypervisor.address, ethers.utils.parseEther('1000000'))
        await token1.connect(manager).approve(tokeHypervisor.address, ethers.utils.parseEther('1000000'))
        await token0.connect(manager).approve(uniProxy.address, ethers.utils.parseEther('1000000'))
        await token1.connect(manager).approve(uniProxy.address, ethers.utils.parseEther('1000000'))

        let liqBalance = await tokeHypervisor.balanceOf(manager.address)
        let amount0 = await token0.balanceOf(manager.address)
        let amount1 = await token0.balanceOf(manager.address)
        expect(liqBalance).to.equal(0)
        console.log("Before Deposit: " + ethers.utils.formatEther(liqBalance))
        console.log("Amount 0: " + ethers.utils.formatEther(amount0))
        console.log("Amount 1: " + ethers.utils.formatEther(amount1))

        // deposit
        await gammaController.connect(manager).deploy(
            ethers.utils.parseEther('1000'),
            ethers.utils.parseEther('1000'),
            tokeHypervisor.address,
            0
        )

        liqBalance = await tokeHypervisor.balanceOf(manager.address)
        amount0 = await token0.balanceOf(manager.address)
        amount1 = await token0.balanceOf(manager.address)
        expect(liqBalance).to.equal(ethers.utils.parseEther('2000'))
        console.log("After Deposit: " + ethers.utils.formatEther(liqBalance))
        console.log("Amount 0: " + ethers.utils.formatEther(amount0))
        console.log("Amount 1: " + ethers.utils.formatEther(amount1))

        // withdraw

        await gammaController.connect(manager).withdraw(
            tokeHypervisor.address,
            liqBalance,
            [0, 0]
        )
        
        liqBalance = await tokeHypervisor.balanceOf(manager.address)
        amount0 = await token0.balanceOf(manager.address)
        amount1 = await token0.balanceOf(manager.address)
        expect(liqBalance).to.equal(0)
        console.log("After Withdraw: " + ethers.utils.formatEther(liqBalance))
        console.log("Amount 0: " + ethers.utils.formatEther(amount0))
        console.log("Amount 1: " + ethers.utils.formatEther(amount1))
    });
})

