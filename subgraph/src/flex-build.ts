import {
  ComponentBought as ComponentBoughtEvent,
  ComponentCreated as ComponentCreatedEvent
} from "../generated/FlexBuild/FlexBuild"
import { ComponentBought, ComponentCreated } from "../generated/schema"

export function handleComponentBought(event: ComponentBoughtEvent): void {
  let entity = new ComponentBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.buyer = event.params.buyer
  entity.component_id = event.params.component_id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleComponentCreated(event: ComponentCreatedEvent): void {
  let entity = new ComponentCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.code_hash = event.params.code_hash
  entity.price = event.params.price
  entity.id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
