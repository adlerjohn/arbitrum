/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface MockInterface extends ethers.utils.Interface {
  functions: {
    'createRetryableTicket(address,uint256,uint256,address,address,uint256,uint256,bytes)': FunctionFragment
    'mocked()': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'createRetryableTicket',
    values: [
      string,
      BigNumberish,
      BigNumberish,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(functionFragment: 'mocked', values?: undefined): string

  decodeFunctionResult(
    functionFragment: 'createRetryableTicket',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'mocked', data: BytesLike): Result

  events: {}
}

export class Mock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: MockInterface

  functions: {
    createRetryableTicket(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: string,
      arg4: string,
      arg5: BigNumberish,
      arg6: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    mocked(overrides?: CallOverrides): Promise<[string]>
  }

  createRetryableTicket(
    arg0: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    arg3: string,
    arg4: string,
    arg5: BigNumberish,
    arg6: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  mocked(overrides?: CallOverrides): Promise<string>

  callStatic: {
    createRetryableTicket(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: string,
      arg4: string,
      arg5: BigNumberish,
      arg6: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    mocked(overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    createRetryableTicket(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: string,
      arg4: string,
      arg5: BigNumberish,
      arg6: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    mocked(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    createRetryableTicket(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: string,
      arg4: string,
      arg5: BigNumberish,
      arg6: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    mocked(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
