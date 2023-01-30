import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ComponentBought,
  ComponentCreated
} from "../generated/FlexBuild/FlexBuild"

export function createComponentBoughtEvent(
  buyer: Address,
  component_id: BigInt
): ComponentBought {
  let componentBoughtEvent = changetype<ComponentBought>(newMockEvent())

  componentBoughtEvent.parameters = new Array()

  componentBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  componentBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "component_id",
      ethereum.Value.fromUnsignedBigInt(component_id)
    )
  )

  return componentBoughtEvent
}

export function createComponentCreatedEvent(
  owner: Address,
  code_hash: string,
  price: BigInt,
  id: BigInt
): ComponentCreated {
  let componentCreatedEvent = changetype<ComponentCreated>(newMockEvent())

  componentCreatedEvent.parameters = new Array()

  componentCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  componentCreatedEvent.parameters.push(
    new ethereum.EventParam("code_hash", ethereum.Value.fromString(code_hash))
  )
  componentCreatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  componentCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return componentCreatedEvent
}
