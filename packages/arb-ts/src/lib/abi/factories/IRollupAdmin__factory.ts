/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type { IRollupAdmin, IRollupAdminInterface } from '../IRollupAdmin'

const _abi = [
  {
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_outbox',
        type: 'address',
      },
    ],
    name: 'removeOldOutbox',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'resume',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newArbGasSpeedLimitPerBlock',
        type: 'uint256',
      },
    ],
    name: 'setArbGasSpeedLimitPerBlock',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newBaseStake',
        type: 'uint256',
      },
    ],
    name: 'setBaseStake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newChallengeExecutionBisectionDegree',
        type: 'uint256',
      },
    ],
    name: 'setChallengeExecutionBisectionDegree',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newConfirmPeriod',
        type: 'uint256',
      },
    ],
    name: 'setConfirmPeriodBlocks',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newExtraTimeBlocks',
        type: 'uint256',
      },
    ],
    name: 'setExtraChallengeTimeBlocks',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newAdminFacet',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'newUserFacet',
        type: 'address',
      },
    ],
    name: 'setFacets',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_inbox',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '_enabled',
        type: 'bool',
      },
    ],
    name: 'setInbox',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newPeriod',
        type: 'uint256',
      },
    ],
    name: 'setMinimumAssertionPeriod',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IOutbox',
        name: '_outbox',
        type: 'address',
      },
    ],
    name: 'setOutbox',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'setOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newSequencer',
        type: 'address',
      },
    ],
    name: 'setSequencer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newSequencerInboxMaxDelayBlocks',
        type: 'uint256',
      },
    ],
    name: 'setSequencerInboxMaxDelayBlocks',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newSequencerInboxMaxDelaySeconds',
        type: 'uint256',
      },
    ],
    name: 'setSequencerInboxMaxDelaySeconds',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newStakeToken',
        type: 'address',
      },
    ],
    name: 'setStakeToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_validator',
        type: 'address[]',
      },
      {
        internalType: 'bool[]',
        name: '_val',
        type: 'bool[]',
      },
    ],
    name: 'setValidator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'whitelist',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: 'user',
        type: 'address[]',
      },
      {
        internalType: 'bool[]',
        name: 'val',
        type: 'bool[]',
      },
    ],
    name: 'setWhitelistEntries',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'whitelist',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'newWhitelist',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: 'targets',
        type: 'address[]',
      },
    ],
    name: 'updateWhitelistConsumers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'beacon',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'upgradeBeacon',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]

export class IRollupAdmin__factory {
  static readonly abi = _abi
  static createInterface(): IRollupAdminInterface {
    return new utils.Interface(_abi) as IRollupAdminInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRollupAdmin {
    return new Contract(address, _abi, signerOrProvider) as IRollupAdmin
  }
}
