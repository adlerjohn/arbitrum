/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from 'ethers'
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from '@nomiclabs/hardhat-ethers/types'

import * as Contracts from '.'

declare module 'hardhat/types/runtime' {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: 'ERC20PermitUpgradeable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20PermitUpgradeable__factory>
    getContractFactory(
      name: 'IERC20PermitUpgradeable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20PermitUpgradeable__factory>
    getContractFactory(
      name: 'ERC20Upgradeable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Upgradeable__factory>
    getContractFactory(
      name: 'IERC20Upgradeable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>
    getContractFactory(
      name: 'Ownable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>
    getContractFactory(
      name: 'BeaconProxy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BeaconProxy__factory>
    getContractFactory(
      name: 'IBeacon',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeacon__factory>
    getContractFactory(
      name: 'Proxy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>
    getContractFactory(
      name: 'ProxyAdmin',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyAdmin__factory>
    getContractFactory(
      name: 'TransparentUpgradeableProxy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TransparentUpgradeableProxy__factory>
    getContractFactory(
      name: 'UpgradeableBeacon',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UpgradeableBeacon__factory>
    getContractFactory(
      name: 'UpgradeableProxy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UpgradeableProxy__factory>
    getContractFactory(
      name: 'ERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>
    getContractFactory(
      name: 'IERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>
    getContractFactory(
      name: 'Pausable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>
    getContractFactory(
      name: 'IOneStepProof',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOneStepProof__factory>
    getContractFactory(
      name: 'IBridge',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBridge__factory>
    getContractFactory(
      name: 'IInbox',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IInbox__factory>
    getContractFactory(
      name: 'IMessageProvider',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMessageProvider__factory>
    getContractFactory(
      name: 'IOutbox',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOutbox__factory>
    getContractFactory(
      name: 'ISequencerInbox',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISequencerInbox__factory>
    getContractFactory(
      name: 'IChallenge',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IChallenge__factory>
    getContractFactory(
      name: 'IChallengeFactory',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IChallengeFactory__factory>
    getContractFactory(
      name: 'Cloneable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Cloneable__factory>
    getContractFactory(
      name: 'ICloneable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICloneable__factory>
    getContractFactory(
      name: 'Whitelist',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Whitelist__factory>
    getContractFactory(
      name: 'WhitelistConsumer',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WhitelistConsumer__factory>
    getContractFactory(
      name: 'IRollupAdmin',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRollupAdmin__factory>
    getContractFactory(
      name: 'IRollupUser',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRollupUser__factory>
    getContractFactory(
      name: 'INode',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INode__factory>
    getContractFactory(
      name: 'INodeFactory',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INodeFactory__factory>
    getContractFactory(
      name: 'IRollupCore',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRollupCore__factory>
    getContractFactory(
      name: 'Rollup',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Rollup__factory>
    getContractFactory(
      name: 'RollupBase',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RollupBase__factory>
    getContractFactory(
      name: 'RollupCore',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RollupCore__factory>
    getContractFactory(
      name: 'RollupEventBridge',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RollupEventBridge__factory>
    getContractFactory(
      name: 'ArbSys',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArbSys__factory>
    getContractFactory(
      name: 'ArbBatchTokenMover',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArbBatchTokenMover__factory>
    getContractFactory(
      name: 'EthBatchTokenReceiver',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EthBatchTokenReceiver__factory>
    getContractFactory(
      name: 'BuddyDeployer',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BuddyDeployer__factory>
    getContractFactory(
      name: 'L1Buddy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1Buddy__factory>
    getContractFactory(
      name: 'Mock',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Mock__factory>
    getContractFactory(
      name: 'TestBuddy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestBuddy__factory>
    getContractFactory(
      name: 'TestConstructorBuddy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestConstructorBuddy__factory>
    getContractFactory(
      name: 'MMR',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MMR__factory>
    getContractFactory(
      name: 'NodeInterface',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NodeInterface__factory>
    getContractFactory(
      name: 'RetryableTicketCreator',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RetryableTicketCreator__factory>
    getContractFactory(
      name: 'L2ArbitrumGateway',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2ArbitrumGateway__factory>
    getContractFactory(
      name: 'L2CustomGateway',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2CustomGateway__factory>
    getContractFactory(
      name: 'L2ERC20Gateway',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2ERC20Gateway__factory>
    getContractFactory(
      name: 'L2GatewayRouter',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2GatewayRouter__factory>
    getContractFactory(
      name: 'L2WethGateway',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2WethGateway__factory>
    getContractFactory(
      name: 'IArbToken',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IArbToken__factory>
    getContractFactory(
      name: 'StandardArbERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StandardArbERC20__factory>
    getContractFactory(
      name: 'ITradeableExitReceiver',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITradeableExitReceiver__factory>
    getContractFactory(
      name: 'L1ArbitrumExtendedGateway',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1ArbitrumExtendedGateway__factory>
    getContractFactory(
      name: 'L1ArbitrumGateway',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1ArbitrumGateway__factory>
    getContractFactory(
      name: 'L1CustomGateway',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1CustomGateway__factory>
    getContractFactory(
      name: 'L1ERC20Gateway',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1ERC20Gateway__factory>
    getContractFactory(
      name: 'L1GatewayRouter',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1GatewayRouter__factory>
    getContractFactory(
      name: 'L1WethGateway',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1WethGateway__factory>
    getContractFactory(
      name: 'ICustomToken',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICustomToken__factory>
    getContractFactory(
      name: 'AeERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AeERC20__factory>
    getContractFactory(
      name: 'AeWETH',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AeWETH__factory>
    getContractFactory(
      name: 'BeaconProxyFactory',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BeaconProxyFactory__factory>
    getContractFactory(
      name: 'ClonableBeaconProxy',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ClonableBeaconProxy__factory>
    getContractFactory(
      name: 'ProxySetter',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxySetter__factory>
    getContractFactory(
      name: 'ERC677Token',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC677Token__factory>
    getContractFactory(
      name: 'ArbitrumGateway',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ArbitrumGateway__factory>
    getContractFactory(
      name: 'L1ArbitrumMessenger',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1ArbitrumMessenger__factory>
    getContractFactory(
      name: 'L2ArbitrumMessenger',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2ArbitrumMessenger__factory>
    getContractFactory(
      name: 'GatewayRouter',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GatewayRouter__factory>
    getContractFactory(
      name: 'ICustomGateway',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICustomGateway__factory>
    getContractFactory(
      name: 'IGatewayRouter',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGatewayRouter__factory>
    getContractFactory(
      name: 'ITokenGateway',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITokenGateway__factory>
    getContractFactory(
      name: 'TokenGateway',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenGateway__factory>
    getContractFactory(
      name: 'IERC677',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC677__factory>
    getContractFactory(
      name: 'IERC677Receiver',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC677Receiver__factory>
    getContractFactory(
      name: 'IWETH9',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH9__factory>
    getContractFactory(
      name: 'L2GatewayToken',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2GatewayToken__factory>
    getContractFactory(
      name: 'ConfirmRoots',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmRoots__factory>
    getContractFactory(
      name: 'IWETH9L1',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH9L1__factory>
    getContractFactory(
      name: 'IExitLiquidityProvider',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IExitLiquidityProvider__factory>
    getContractFactory(
      name: 'L1PassiveFastExitManager',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1PassiveFastExitManager__factory>
    getContractFactory(
      name: 'L1SignedLiquidityProvider',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1SignedLiquidityProvider__factory>
    getContractFactory(
      name: 'StakedLiquidityProvider',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakedLiquidityProvider__factory>
    getContractFactory(
      name: 'FastExitMock',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FastExitMock__factory>
    getContractFactory(
      name: 'L1ArbitrumTestMessenger',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1ArbitrumTestMessenger__factory>
    getContractFactory(
      name: 'L1CustomGatewayTester',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1CustomGatewayTester__factory>
    getContractFactory(
      name: 'L1GatewayTester',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1GatewayTester__factory>
    getContractFactory(
      name: 'L1WethGatewayTester',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L1WethGatewayTester__factory>
    getContractFactory(
      name: 'L2ArbitrumTestMessenger',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2ArbitrumTestMessenger__factory>
    getContractFactory(
      name: 'L2CustomGatewayTester',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2CustomGatewayTester__factory>
    getContractFactory(
      name: 'L2GatewayTester',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2GatewayTester__factory>
    getContractFactory(
      name: 'L2WethGatewayTester',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2WethGatewayTester__factory>
    getContractFactory(
      name: 'InboxMock',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.InboxMock__factory>
    getContractFactory(
      name: 'TestArbCustomToken',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestArbCustomToken__factory>
    getContractFactory(
      name: 'TestCustomTokenL1',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestCustomTokenL1__factory>
    getContractFactory(
      name: 'TestERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestERC20__factory>
    getContractFactory(
      name: 'L2Called',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.L2Called__factory>
    getContractFactory(
      name: 'TestWETH9',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestWETH9__factory>

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>
  }
}
