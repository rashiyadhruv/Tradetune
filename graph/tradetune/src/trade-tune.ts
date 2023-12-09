import {
  MessageReceived as MessageReceivedEvent,
  MessageSent as MessageSentEvent,
  OwnershipTransferRequested as OwnershipTransferRequestedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SnipeExecuted as SnipeExecutedEvent,
  SnipeInitialized as SnipeInitializedEvent,
  TokensTransferred as TokensTransferredEvent
} from "../generated/TradeTune/TradeTune"
import {
  MessageReceived,
  MessageSent,
  OwnershipTransferRequested,
  OwnershipTransferred,
  SnipeExecuted,
  SnipeInitialized,
  TokensTransferred
} from "../generated/schema"

export function handleMessageReceived(event: MessageReceivedEvent): void {
  let entity = new MessageReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.messageId = event.params.messageId
  entity.sourceChainSelector = event.params.sourceChainSelector
  entity.sender = event.params.sender
  entity.text_amountIn = event.params.text.amountIn
  entity.text_amountOutMin = event.params.text.amountOutMin
  entity.text_tokens = event.params.text.tokens
  entity.text_recipient = event.params.text.recipient
  entity.text_deadline = event.params.text.deadline

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMessageSent(event: MessageSentEvent): void {
  let entity = new MessageSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.messageId = event.params.messageId
  entity.destinationChainSelector = event.params.destinationChainSelector
  entity.receiver = event.params.receiver
  entity.text_amountIn = event.params.text.amountIn
  entity.text_amountOutMin = event.params.text.amountOutMin
  entity.text_tokens = event.params.text.tokens
  entity.text_recipient = event.params.text.recipient
  entity.text_deadline = event.params.text.deadline
  entity.feeToken = event.params.feeToken
  entity.fees = event.params.fees

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferRequested(
  event: OwnershipTransferRequestedEvent
): void {
  let entity = new OwnershipTransferRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSnipeExecuted(event: SnipeExecutedEvent): void {
  let entity = new SnipeExecuted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.recipient = event.params.recipient
  entity.destChain = event.params.destChain
  entity.blockNumber = event.params.blockNumber
  entity.sTokenAmt = event.params.sTokenAmt
  entity.vTokenAmt = event.params.vTokenAmt
  entity.stableToken = event.params.stableToken
  entity.volatileToken = event.params.volatileToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSnipeInitialized(event: SnipeInitializedEvent): void {
  let entity = new SnipeInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.recipient = event.params.recipient
  entity.destChain = event.params.destChain
  entity.blockNumber = event.params.blockNumber
  entity.stableToken = event.params.stableToken
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensTransferred(event: TokensTransferredEvent): void {
  let entity = new TokensTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.messageId = event.params.messageId
  entity.destinationChainSelector = event.params.destinationChainSelector
  entity.receiver = event.params.receiver
  entity.token = event.params.token
  entity.tokenAmount = event.params.tokenAmount
  entity.feeToken = event.params.feeToken
  entity.fees = event.params.fees

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
