/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IUniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Factory__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "IUniswapV3FlashCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3FlashCallback__factory>;
    getContractFactory(
      name: "IUniswapV3MintCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3MintCallback__factory>;
    getContractFactory(
      name: "IUniswapV3SwapCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3SwapCallback__factory>;
    getContractFactory(
      name: "IERC20Minimal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Minimal__factory>;
    getContractFactory(
      name: "IUniswapV3Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Factory__factory>;
    getContractFactory(
      name: "IUniswapV3Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Pool__factory>;
    getContractFactory(
      name: "IUniswapV3PoolDeployer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolDeployer__factory>;
    getContractFactory(
      name: "IUniswapV3PoolActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolDerivedState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolDerivedState__factory>;
    getContractFactory(
      name: "IUniswapV3PoolEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolEvents__factory>;
    getContractFactory(
      name: "IUniswapV3PoolImmutables",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolImmutables__factory>;
    getContractFactory(
      name: "IUniswapV3PoolOwnerActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolOwnerActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolState__factory>;
    getContractFactory(
      name: "UniswapV3Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV3Factory__factory>;
    getContractFactory(
      name: "UniswapV3Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV3Pool__factory>;
    getContractFactory(
      name: "PairFlash",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PairFlash__factory>;
    getContractFactory(
      name: "IERC1271",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1271__factory>;
    getContractFactory(
      name: "IERC20PermitAllowed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20PermitAllowed__factory>;
    getContractFactory(
      name: "IWETH9",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH9__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC721Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Permit__factory>;
    getContractFactory(
      name: "IMulticall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMulticall__factory>;
    getContractFactory(
      name: "INonfungiblePositionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INonfungiblePositionManager__factory>;
    getContractFactory(
      name: "INonfungibleTokenPositionDescriptor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INonfungibleTokenPositionDescriptor__factory>;
    getContractFactory(
      name: "IPeripheryImmutableState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeripheryImmutableState__factory>;
    getContractFactory(
      name: "IPeripheryPayments",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeripheryPayments__factory>;
    getContractFactory(
      name: "IPeripheryPaymentsWithFee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeripheryPaymentsWithFee__factory>;
    getContractFactory(
      name: "IPoolInitializer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolInitializer__factory>;
    getContractFactory(
      name: "IQuoter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IQuoter__factory>;
    getContractFactory(
      name: "IQuoterV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IQuoterV2__factory>;
    getContractFactory(
      name: "ISelfPermit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISelfPermit__factory>;
    getContractFactory(
      name: "ISwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISwapRouter__factory>;
    getContractFactory(
      name: "ITickLens",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITickLens__factory>;
    getContractFactory(
      name: "IV3Migrator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IV3Migrator__factory>;
    getContractFactory(
      name: "Quoter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Quoter__factory>;
    getContractFactory(
      name: "QuoterV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.QuoterV2__factory>;
    getContractFactory(
      name: "TickLens",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TickLens__factory>;
    getContractFactory(
      name: "UniswapInterfaceMulticall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapInterfaceMulticall__factory>;
    getContractFactory(
      name: "NFTDescriptor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTDescriptor__factory>;
    getContractFactory(
      name: "NonfungiblePositionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NonfungiblePositionManager__factory>;
    getContractFactory(
      name: "NonfungibleTokenPositionDescriptor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NonfungibleTokenPositionDescriptor__factory>;
    getContractFactory(
      name: "SwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SwapRouter__factory>;
    getContractFactory(
      name: "V3Migrator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.V3Migrator__factory>;
    getContractFactory(
      name: "BaseController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseController__factory>;
    getContractFactory(
      name: "GammaController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GammaController__factory>;
    getContractFactory(
      name: "IHypervisorFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHypervisorFactory__factory>;
    getContractFactory(
      name: "ITokeHypervisor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITokeHypervisor__factory>;
    getContractFactory(
      name: "IUniProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniProxy__factory>;
    getContractFactory(
      name: "IUniversalVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniversalVault__factory>;
    getContractFactory(
      name: "IVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVault__factory>;
    getContractFactory(
      name: "TokeHypervisor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokeHypervisor__factory>;
    getContractFactory(
      name: "TokeHypervisorFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokeHypervisorFactory__factory>;
    getContractFactory(
      name: "Hypervisor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Hypervisor__factory>;
    getContractFactory(
      name: "HypervisorFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HypervisorFactory__factory>;
    getContractFactory(
      name: "HypervisorV3Migrator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HypervisorV3Migrator__factory>;
    getContractFactory(
      name: "IHypervisor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IHypervisor__factory>;
    getContractFactory(
      name: "IUniProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniProxy__factory>;
    getContractFactory(
      name: "IUniversalVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniversalVault__factory>;
    getContractFactory(
      name: "IVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVault__factory>;
    getContractFactory(
      name: "MockUniswapV3Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockUniswapV3Pool__factory>;
    getContractFactory(
      name: "MockUniswapV3PoolDeployer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockUniswapV3PoolDeployer__factory>;
    getContractFactory(
      name: "TestERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestERC20__factory>;
    getContractFactory(
      name: "Admin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Admin__factory>;
    getContractFactory(
      name: "Swap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Swap__factory>;
    getContractFactory(
      name: "MockToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockToken__factory>;
    getContractFactory(
      name: "TestRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestRouter__factory>;
    getContractFactory(
      name: "UniProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniProxy__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IUniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Factory>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "IUniswapV3FlashCallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3FlashCallback>;
    getContractAt(
      name: "IUniswapV3MintCallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3MintCallback>;
    getContractAt(
      name: "IUniswapV3SwapCallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3SwapCallback>;
    getContractAt(
      name: "IERC20Minimal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Minimal>;
    getContractAt(
      name: "IUniswapV3Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Factory>;
    getContractAt(
      name: "IUniswapV3Pool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Pool>;
    getContractAt(
      name: "IUniswapV3PoolDeployer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolDeployer>;
    getContractAt(
      name: "IUniswapV3PoolActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolActions>;
    getContractAt(
      name: "IUniswapV3PoolDerivedState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolDerivedState>;
    getContractAt(
      name: "IUniswapV3PoolEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolEvents>;
    getContractAt(
      name: "IUniswapV3PoolImmutables",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolImmutables>;
    getContractAt(
      name: "IUniswapV3PoolOwnerActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolOwnerActions>;
    getContractAt(
      name: "IUniswapV3PoolState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolState>;
    getContractAt(
      name: "UniswapV3Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV3Factory>;
    getContractAt(
      name: "UniswapV3Pool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV3Pool>;
    getContractAt(
      name: "PairFlash",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PairFlash>;
    getContractAt(
      name: "IERC1271",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1271>;
    getContractAt(
      name: "IERC20PermitAllowed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20PermitAllowed>;
    getContractAt(
      name: "IWETH9",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH9>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC721Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Permit>;
    getContractAt(
      name: "IMulticall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMulticall>;
    getContractAt(
      name: "INonfungiblePositionManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INonfungiblePositionManager>;
    getContractAt(
      name: "INonfungibleTokenPositionDescriptor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INonfungibleTokenPositionDescriptor>;
    getContractAt(
      name: "IPeripheryImmutableState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeripheryImmutableState>;
    getContractAt(
      name: "IPeripheryPayments",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeripheryPayments>;
    getContractAt(
      name: "IPeripheryPaymentsWithFee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeripheryPaymentsWithFee>;
    getContractAt(
      name: "IPoolInitializer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPoolInitializer>;
    getContractAt(
      name: "IQuoter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IQuoter>;
    getContractAt(
      name: "IQuoterV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IQuoterV2>;
    getContractAt(
      name: "ISelfPermit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISelfPermit>;
    getContractAt(
      name: "ISwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISwapRouter>;
    getContractAt(
      name: "ITickLens",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITickLens>;
    getContractAt(
      name: "IV3Migrator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IV3Migrator>;
    getContractAt(
      name: "Quoter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Quoter>;
    getContractAt(
      name: "QuoterV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.QuoterV2>;
    getContractAt(
      name: "TickLens",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TickLens>;
    getContractAt(
      name: "UniswapInterfaceMulticall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapInterfaceMulticall>;
    getContractAt(
      name: "NFTDescriptor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFTDescriptor>;
    getContractAt(
      name: "NonfungiblePositionManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NonfungiblePositionManager>;
    getContractAt(
      name: "NonfungibleTokenPositionDescriptor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NonfungibleTokenPositionDescriptor>;
    getContractAt(
      name: "SwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SwapRouter>;
    getContractAt(
      name: "V3Migrator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.V3Migrator>;
    getContractAt(
      name: "BaseController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseController>;
    getContractAt(
      name: "GammaController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GammaController>;
    getContractAt(
      name: "IHypervisorFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHypervisorFactory>;
    getContractAt(
      name: "ITokeHypervisor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITokeHypervisor>;
    getContractAt(
      name: "IUniProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniProxy>;
    getContractAt(
      name: "IUniversalVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniversalVault>;
    getContractAt(
      name: "IVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVault>;
    getContractAt(
      name: "TokeHypervisor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokeHypervisor>;
    getContractAt(
      name: "TokeHypervisorFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokeHypervisorFactory>;
    getContractAt(
      name: "Hypervisor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Hypervisor>;
    getContractAt(
      name: "HypervisorFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HypervisorFactory>;
    getContractAt(
      name: "HypervisorV3Migrator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HypervisorV3Migrator>;
    getContractAt(
      name: "IHypervisor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IHypervisor>;
    getContractAt(
      name: "IUniProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniProxy>;
    getContractAt(
      name: "IUniversalVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniversalVault>;
    getContractAt(
      name: "IVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVault>;
    getContractAt(
      name: "MockUniswapV3Pool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockUniswapV3Pool>;
    getContractAt(
      name: "MockUniswapV3PoolDeployer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockUniswapV3PoolDeployer>;
    getContractAt(
      name: "TestERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestERC20>;
    getContractAt(
      name: "Admin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Admin>;
    getContractAt(
      name: "Swap",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Swap>;
    getContractAt(
      name: "MockToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockToken>;
    getContractAt(
      name: "TestRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestRouter>;
    getContractAt(
      name: "UniProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniProxy>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
