/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { FastExitMock, FastExitMockInterface } from '../FastExitMock'

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: 'Triggered',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'onTokenTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'dest',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'erc20',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'exitNum',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'liquidityProof',
        type: 'bytes',
      },
    ],
    name: 'requestLiquidity',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_fee',
        type: 'uint256',
      },
    ],
    name: 'setFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x60806040526000805534801561001457600080fd5b5061040f806100246000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806369fe0e2d14610046578063a4c0ed3614610065578063effc168b1461011e575b600080fd5b6100636004803603602081101561005c57600080fd5b5035610226565b005b6100636004803603606081101561007b57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156100aa57600080fd5b8201836020820111156100bc57600080fd5b803590602001918460018302840111600160201b831117156100dd57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061022b945050505050565b6101b1600480360360a081101561013457600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b81111561017357600080fd5b82018360208201111561018557600080fd5b803590602001918460018302840111600160201b831117156101a657600080fd5b5090925090506102dd565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101eb5781810151838201526020016101d3565b50505050905090810190601f1680156102185780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600055565b6040805180820190915260068152650c1e0c4c8ccd60d21b6020918201528151908201207f1ac7d1b81b7ba1025b36ccb86723da6ee5a87259f1c2fd5abe69d3200b512ec8146102af576040805162461bcd60e51b815260206004820152600a60248201526957524f4e475f4441544160b01b604482015290519081900360640190fd5b6040517f2f0c0af451e6330658fba0c08f7d82acdb1feff8d2904044a765af1b27df3e1f90600090a1505050565b60606000548511610321576040805162461bcd60e51b8152602060048201526009602482015268554e444552464c4f5760b81b604482015290519081900360640190fd5b856001600160a01b031663a9059cbb8860005488036040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561038557600080fd5b505af1158015610399573d6000803e3d6000fd5b505050506040513d60208110156103af57600080fd5b50506040805180820190915260068152650c1e0c4c8ccd60d21b602082015297965050505050505056fea2646970667358221220c3edf972a54a3a77f9359b5285fc64bdcffc9050a9e7c59289559d24b8e4282964736f6c634300060b0033'

export class FastExitMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FastExitMock> {
    return super.deploy(overrides || {}) as Promise<FastExitMock>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): FastExitMock {
    return super.attach(address) as FastExitMock
  }
  connect(signer: Signer): FastExitMock__factory {
    return super.connect(signer) as FastExitMock__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): FastExitMockInterface {
    return new utils.Interface(_abi) as FastExitMockInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FastExitMock {
    return new Contract(address, _abi, signerOrProvider) as FastExitMock
  }
}
