/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { BridgeUtils, BridgeUtilsInterface } from '../BridgeUtils'

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract IBridge',
        name: 'delayedBridge',
        type: 'address',
      },
      {
        internalType: 'contract ISequencerInbox',
        name: 'sequencerInbox',
        type: 'address',
      },
    ],
    name: 'getCountsAndAccumulators',
    outputs: [
      {
        internalType: 'uint256[2]',
        name: 'counts',
        type: 'uint256[2]',
      },
      {
        internalType: 'bytes32[2]',
        name: 'accs',
        type: 'bytes32[2]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50610372806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806301ccad0214610030575b600080fd5b61005e6004803603604081101561004657600080fd5b506001600160a01b03813581169160200135166100c5565b6040518083600260200280838360005b8381101561008657818101518382015260200161006e565b5050505090500182600260200280838360005b838110156100b1578181015183820152602001610099565b505050509050019250505060405180910390f35b6100cd61031e565b6100d561031e565b6000846001600160a01b0316633dbcc8d16040518163ffffffff1660e01b815260040160206040518083038186803b15801561011057600080fd5b505afa158015610124573d6000803e3d6000fd5b505050506040513d602081101561013a57600080fd5b5051905080156101c0578083526040805163d9dd67ab60e01b81526000198301600482015290516001600160a01b0387169163d9dd67ab916024808301926020929190829003018186803b15801561019157600080fd5b505afa1580156101a5573d6000803e3d6000fd5b505050506040513d60208110156101bb57600080fd5b505182525b6000846001600160a01b031663d9b141ff6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101fb57600080fd5b505afa15801561020f573d6000803e3d6000fd5b505050506040513d602081101561022557600080fd5b50519050801561031557846001600160a01b0316633dbcc8d16040518163ffffffff1660e01b815260040160206040518083038186803b15801561026857600080fd5b505afa15801561027c573d6000803e3d6000fd5b505050506040513d602081101561029257600080fd5b50516020808601919091526040805163d9dd67ab60e01b81526000198401600482015290516001600160a01b0388169263d9dd67ab9260248082019391829003018186803b1580156102e357600080fd5b505afa1580156102f7573d6000803e3d6000fd5b505050506040513d602081101561030d57600080fd5b505160208401525b50509250929050565b6040518060400160405280600290602082028036833750919291505056fea2646970667358221220c5ffb5175bd411731a58af6859380d03c0d76b265c23705e7695a064d85c99b964736f6c634300060b0033'

export class BridgeUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BridgeUtils> {
    return super.deploy(overrides || {}) as Promise<BridgeUtils>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): BridgeUtils {
    return super.attach(address) as BridgeUtils
  }
  connect(signer: Signer): BridgeUtils__factory {
    return super.connect(signer) as BridgeUtils__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): BridgeUtilsInterface {
    return new utils.Interface(_abi) as BridgeUtilsInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeUtils {
    return new Contract(address, _abi, signerOrProvider) as BridgeUtils
  }
}
