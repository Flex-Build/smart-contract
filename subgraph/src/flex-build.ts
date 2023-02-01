import {
  ComponentBought as ComponentBoughtEvent,
  ComponentCreated as ComponentCreatedEvent
} from "../generated/FlexBuild/FlexBuild"
import { Component, User } from "../generated/schema"

export function handleComponentBought(event: ComponentBoughtEvent): void {
  let buyer = event.params.buyer
  const user = User.load(buyer.toHexString())
  if (!user) {
    const user = new User(buyer.toHexString())
    user.bought_components = [event.params.component_id.toString()]
    user.save();
  } else {
    const bought_components = user.bought_components
    bought_components.push(event.params.component_id.toString())
    user.save();
  }
}

export function handleComponentCreated(event: ComponentCreatedEvent): void {
  let owner = event.params.owner
  const user = User.load(owner.toHexString())
  if (!user) {
    const user = new User(owner.toHexString())
    user.bought_components = []
    user.save();
  }
  let component = new Component(
    event.params.id.toString()
  )
  component.code_uri = "ipfs://" + event.params.code_hash;
  component.price = event.params.price
  component.owner = event.params.owner
  component.save()
}
