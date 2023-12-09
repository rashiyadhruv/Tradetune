import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  MessageReceived,
  MessageSent,
  OwnershipTransferRequested,
  OwnershipTransferred,
  SnipeExecuted,
  SnipeInitialized,
  TokensTransferred
} from "../generated/TradeTune/TradeTune"

export function createMessageReceivedEvent(
  messageId: Bytes,
  sourceChainSelector: BigInt,
  sender: Address,
  text: ethereum.Tuple
): MessageReceived {
  let messageReceivedEvent = changetype<MessageReceived>(newMockEvent())

  messageReceivedEvent.parameters = new Array()

  messageReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "messageId",
      ethereum.Value.fromFixedBytes(messageId)
    )
  )
  messageReceivedEvent.parameters.push(
    new ethereum.EventParam(
      "sourceChainSelector",
      ethereum.Value.fromUnsignedBigInt(sourceChainSelector)
    )
  )
  messageReceivedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  messageReceivedEvent.parameters.push(
    new ethereum.EventParam("text", ethereum.Value.fromTuple(text))
  )

  return messageReceivedEvent
}

export function createMessageSentEvent(
  messageId: Bytes,
  destinationChainSelector: BigInt,
  receiver: Address,
  text: ethereum.Tuple,
  feeToken: Address,
  fees: BigInt
): MessageSent {
  let messageSentEvent = changetype<MessageSent>(newMockEvent())

  messageSentEvent.parameters = new Array()

  messageSentEvent.parameters.push(
    new ethereum.EventParam(
      "messageId",
      ethereum.Value.fromFixedBytes(messageId)
    )
  )
  messageSentEvent.parameters.push(
    new ethereum.EventParam(
      "destinationChainSelector",
      ethereum.Value.fromUnsignedBigInt(destinationChainSelector)
    )
  )
  messageSentEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  messageSentEvent.parameters.push(
    new ethereum.EventParam("text", ethereum.Value.fromTuple(text))
  )
  messageSentEvent.parameters.push(
    new ethereum.EventParam("feeToken", ethereum.Value.fromAddress(feeToken))
  )
  messageSentEvent.parameters.push(
    new ethereum.EventParam("fees", ethereum.Value.fromUnsignedBigInt(fees))
  )

  return messageSentEvent
}

export function createOwnershipTransferRequestedEvent(
  from: Address,
  to: Address
): OwnershipTransferRequested {
  let ownershipTransferRequestedEvent = changetype<OwnershipTransferRequested>(
    newMockEvent()
  )

  ownershipTransferRequestedEvent.parameters = new Array()

  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferRequestedEvent
}

export function createOwnershipTransferredEvent(
  from: Address,
  to: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferredEvent
}

export function createSnipeExecutedEvent(
  recipient: Address,
  destChain: string,
  blockNumber: BigInt,
  sTokenAmt: BigInt,
  vTokenAmt: BigInt,
  stableToken: Address,
  volatileToken: Address
): SnipeExecuted {
  let snipeExecutedEvent = changetype<SnipeExecuted>(newMockEvent())

  snipeExecutedEvent.parameters = new Array()

  snipeExecutedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  snipeExecutedEvent.parameters.push(
    new ethereum.EventParam("destChain", ethereum.Value.fromString(destChain))
  )
  snipeExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "blockNumber",
      ethereum.Value.fromUnsignedBigInt(blockNumber)
    )
  )
  snipeExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "sTokenAmt",
      ethereum.Value.fromUnsignedBigInt(sTokenAmt)
    )
  )
  snipeExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "vTokenAmt",
      ethereum.Value.fromUnsignedBigInt(vTokenAmt)
    )
  )
  snipeExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "stableToken",
      ethereum.Value.fromAddress(stableToken)
    )
  )
  snipeExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "volatileToken",
      ethereum.Value.fromAddress(volatileToken)
    )
  )

  return snipeExecutedEvent
}

export function createSnipeInitializedEvent(
  recipient: Address,
  destChain: string,
  blockNumber: BigInt,
  stableToken: Address,
  amount: BigInt
): SnipeInitialized {
  let snipeInitializedEvent = changetype<SnipeInitialized>(newMockEvent())

  snipeInitializedEvent.parameters = new Array()

  snipeInitializedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  snipeInitializedEvent.parameters.push(
    new ethereum.EventParam("destChain", ethereum.Value.fromString(destChain))
  )
  snipeInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "blockNumber",
      ethereum.Value.fromUnsignedBigInt(blockNumber)
    )
  )
  snipeInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "stableToken",
      ethereum.Value.fromAddress(stableToken)
    )
  )
  snipeInitializedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return snipeInitializedEvent
}

export function createTokensTransferredEvent(
  messageId: Bytes,
  destinationChainSelector: BigInt,
  receiver: Address,
  token: Address,
  tokenAmount: BigInt,
  feeToken: Address,
  fees: BigInt
): TokensTransferred {
  let tokensTransferredEvent = changetype<TokensTransferred>(newMockEvent())

  tokensTransferredEvent.parameters = new Array()

  tokensTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "messageId",
      ethereum.Value.fromFixedBytes(messageId)
    )
  )
  tokensTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "destinationChainSelector",
      ethereum.Value.fromUnsignedBigInt(destinationChainSelector)
    )
  )
  tokensTransferredEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  tokensTransferredEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokensTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAmount",
      ethereum.Value.fromUnsignedBigInt(tokenAmount)
    )
  )
  tokensTransferredEvent.parameters.push(
    new ethereum.EventParam("feeToken", ethereum.Value.fromAddress(feeToken))
  )
  tokensTransferredEvent.parameters.push(
    new ethereum.EventParam("fees", ethereum.Value.fromUnsignedBigInt(fees))
  )

  return tokensTransferredEvent
}
