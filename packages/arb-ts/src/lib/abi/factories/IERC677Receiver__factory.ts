/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type {
  IERC677Receiver,
  IERC677ReceiverInterface,
} from '../IERC677Receiver'

const _abi = [
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
]

export class IERC677Receiver__factory {
  static readonly abi = _abi
  static createInterface(): IERC677ReceiverInterface {
    return new utils.Interface(_abi) as IERC677ReceiverInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC677Receiver {
    return new Contract(address, _abi, signerOrProvider) as IERC677Receiver
  }
}
