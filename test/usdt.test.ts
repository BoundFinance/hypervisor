import { ethers, waffle } from 'hardhat'
import { BigNumber, BigNumberish, constants } from 'ethers'
import chai from 'chai'
import { expect } from 'chai'
import { fixture, hypervisorTestFixture } from "./shared/fixtures"
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
    SwapRouter,
    UniswapV3Factory,
    IUniswapV3Pool,
    HypervisorFactory,
    Hypervisor,
    NonfungiblePositionManager,
    TestERC20
} from "../typechain"

describe('ETHUSDT Hypervisor', () => {
    let factory: UniswapV3Factory
    let uniswapPool: IUniswapV3Pool
    // token0 = WETH9
    let token0Address = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
    // token1 = USDT
    let token1Address = '0xdAC17F958D2ee523a2206206994597C13D831ec7'
    let uniswapV3Factory = '0x1F98431c8aD98523631AE4a59f267346ea31F984'
    let hypervisorFactory: HypervisorFactory
    let hypervisor: Hypervisor
    let usdt: TestERC20
    let weth9: TestERC20

    beforeEach('deploy contracts', async () => {
        let hypervisorFactoryFactory = await ethers.getContractFactory('HypervisorFactory')
        hypervisorFactory = (await hypervisorFactoryFactory.deploy(uniswapV3Factory)) as HypervisorFactory
        await hypervisorFactory.createHypervisor(token0Address, token1Address, FeeAmount.MEDIUM,-1800, 1800, -600, 0)
        const hypervisorAddress = await hypervisorFactory.getHypervisor(token0Address, token1Address, FeeAmount.MEDIUM)
        hypervisor = (await ethers.getContractAt('Hypervisor', hypervisorAddress)) as Hypervisor

        factory = (await ethers.getContractAt('UniswapV3Factory', uniswapV3Factory)) as UniswapV3Factory
        const poolAddress = await factory.getPool(token0Address, token1Address, FeeAmount.MEDIUM)
        uniswapPool = (await ethers.getContractAt('IUniswapV3Pool', poolAddress)) as IUniswapV3Pool
        usdt = (await ethers.getContractAt('TestERC20', token1Address)) as TestERC20
        weth9 = (await ethers.getContractAt('TestERC20', token0Address)) as TestERC20
    })

    it('allows for swaps on ethusdt pair', async () => {
        let [owner] = await ethers.getSigners()
        // sanity check ethusdt pool address
        let ethusdtMainnetPool = '0x4e68Ccd3E89f51C3074ca5072bbAC773960dFa36'
        expect(uniswapPool.address).to.equal(ethusdtMainnetPool)

        await usdt.approve(hypervisor.address, ethers.utils.parseEther('1000000'))
        await weth9.approve(hypervisor.address, ethers.utils.parseEther('1000000'))

        let usdtBalance = await usdt.balanceOf(owner.address)
        let weth9Balance = await weth9.balanceOf(owner.address)
        console.log("usdt: " + usdtBalance.toString() + " weth: " + weth9Balance.toString())

        await hypervisor.deposit(100000000, 1000, owner.address)
        await hypervisor.rebalance(19140, 19740, 19440, 19500, owner.address, -500)
    })
})
