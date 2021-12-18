/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Swap, SwapInterface } from "../Swap";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_VISR",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "SwapVISR",
    type: "event",
  },
  {
    inputs: [],
    name: "VISR",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "changeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "recipient",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract ISwapRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "send",
        type: "bool",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161094938038061094983398101604081905261002f9161009a565b600080546001600160a01b039485166001600160a01b031991821681179092556001805482169092179091556002805492851692821692909217909155600380549290931691161790556100dc565b80516001600160a01b038116811461009557600080fd5b919050565b6000806000606084860312156100ae578283fd5b6100b78461007e565b92506100c56020850161007e565b91506100d36040850161007e565b90509250925092565b61085e806100eb6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063dd95b9731161005b578063dd95b973146100db578063f2fde38b146100e3578063f887ea40146100f6578063f8fbd478146100fe57610088565b8063412664ae1461008d57806366d003ac146100a25780638da5cb5b146100c057806392c2bcb4146100c8575b600080fd5b6100a061009b3660046106a5565b610111565b005b6100aa6101cf565b6040516100b7919061070f565b60405180910390f35b6100aa6101de565b6100a06100d63660046105ce565b6101ed565b6100aa610246565b6100a06100f13660046105ce565b610255565b6100aa6102ae565b6100a061010c3660046105ef565b6102bd565b6000546001600160a01b031633146101445760405162461bcd60e51b815260040161013b9061077a565b60405180910390fd5b60015460405163a9059cbb60e01b81526001600160a01b038481169263a9059cbb9261017892909116908590600401610761565b602060405180830381600087803b15801561019257600080fd5b505af11580156101a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ca91906106ce565b505050565b6001546001600160a01b031681565b6000546001600160a01b031681565b6000546001600160a01b031633146102175760405162461bcd60e51b815260040161013b9061077a565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6002546001600160a01b031681565b6000546001600160a01b0316331461027f5760405162461bcd60e51b815260040161013b9061077a565b6000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6003546001600160a01b031681565b6000546001600160a01b031633146102e75760405162461bcd60e51b815260040161013b9061077a565b6040516370a0823160e01b81526000906001600160a01b038516906370a082319061031690309060040161070f565b60206040518083038186803b15801561032e57600080fd5b505afa158015610342573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036691906106ea565b600354604051636eb1769f60e11b815291925082916001600160a01b038088169263dd62ed3e9261039d9230921690600401610723565b60206040518083038186803b1580156103b557600080fd5b505afa1580156103c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ed91906106ea565b101561047b5760035460405163095ea7b360e01b81526001600160a01b038681169263095ea7b39261042792909116908590600401610761565b602060405180830381600087803b15801561044157600080fd5b505af1158015610455573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047991906106ce565b505b6003546040805160a081019091528481526000916001600160a01b03169063c04b8d599060208101866104ae57306104bb565b6001546001600160a01b03165b6001600160a01b031681526020014261271001815260200185815260200160008152506040518263ffffffff1660e01b81526004016104fa91906107b1565b602060405180830381600087803b15801561051457600080fd5b505af1158015610528573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054c91906106ea565b90507f2a74fee11ab3c621208caf45f4052cc2bbb42b6353e0152f8afd4bbee0f00863858461057b5730610588565b6001546001600160a01b03165b836040516105989392919061073d565b60405180910390a15050505050565b80356001600160a01b03811681146105be57600080fd5b919050565b80356105be81610840565b6000602082840312156105df578081fd5b6105e8826105a7565b9392505050565b600080600060608486031215610603578182fd5b61060c846105a7565b925060208085013567ffffffffffffffff80821115610629578485fd5b818701915087601f83011261063c578485fd5b81358181111561064857fe5b604051601f8201601f191681018501838111828210171561066557fe5b60405281815283820185018a101561067b578687fd5b81858501868301379081019093019490945250915061069c604085016105c3565b90509250925092565b600080604083850312156106b7578182fd5b6106c0836105a7565b946020939093013593505050565b6000602082840312156106df578081fd5b81516105e881610840565b6000602082840312156106fb578081fd5b5051919050565b6001600160a01b03169052565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b6020808252600a908201527f6f6e6c79206f776e657200000000000000000000000000000000000000000000604082015260600190565b60006020808352835160a08285015280518060c0860152835b818110156107e65782810184015186820160e0015283016107ca565b818111156107f7578460e083880101525b50918501519161080a6040860184610702565b6040860151606086015260608601516080860152608086015160a086015260e0601f19601f830116860101935050505092915050565b801515811461084e57600080fd5b5056fea164736f6c6343000706000a";

export class Swap__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _owner: string,
    _router: string,
    _VISR: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Swap> {
    return super.deploy(
      _owner,
      _router,
      _VISR,
      overrides || {}
    ) as Promise<Swap>;
  }
  getDeployTransaction(
    _owner: string,
    _router: string,
    _VISR: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, _router, _VISR, overrides || {});
  }
  attach(address: string): Swap {
    return super.attach(address) as Swap;
  }
  connect(signer: Signer): Swap__factory {
    return super.connect(signer) as Swap__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapInterface {
    return new utils.Interface(_abi) as SwapInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Swap {
    return new Contract(address, _abi, signerOrProvider) as Swap;
  }
}
