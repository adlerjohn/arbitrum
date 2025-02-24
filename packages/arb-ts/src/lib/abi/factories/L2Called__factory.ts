/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { L2Called, L2CalledInterface } from '../L2Called'

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'num',
        type: 'uint256',
      },
    ],
    name: 'Called',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
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
        internalType: 'uint256',
        name: 'num',
        type: 'uint256',
      },
    ],
    name: 'postDepositHook',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50610220806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632cf07f821461003b578063a4c0ed361461005a575b600080fd5b6100586004803603602081101561005157600080fd5b50356100df565b005b6100586004803603606081101561007057600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156100a057600080fd5b8201836020820111156100b257600080fd5b803590602001918460018302840111640100000000831117156100d457600080fd5b509092509050610115565b6040805182815290517ffea238a9794376fb3707dbbabe56f0fad5e4110a7839485387c458f2d1aa5d509181900360200190a150565b60008282602081101561012757600080fd5b5035905060058114156101425761013d816100df565b6101e3565b8060071415610190576040805162461bcd60e51b815260206004820152601560248201527473686f756c64206661696c2062656361757365203760581b604482015290519081900360640190fd5b80600914156101a8575b60005a111561013d5761019a565b6040805162461bcd60e51b815260206004820152600b60248201526a1cda1bdd5b190819985a5b60aa1b604482015290519081900360640190fd5b505050505056fea264697066735822122099886a6043ff99db1415eca66932bfc934f785b1191682ac91ae9b5de543b47464736f6c634300060b0033'

export class L2Called__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L2Called> {
    return super.deploy(overrides || {}) as Promise<L2Called>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2Called {
    return super.attach(address) as L2Called
  }
  connect(signer: Signer): L2Called__factory {
    return super.connect(signer) as L2Called__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L2CalledInterface {
    return new utils.Interface(_abi) as L2CalledInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2Called {
    return new Contract(address, _abi, signerOrProvider) as L2Called
  }
}
