import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ComponentBought } from "../generated/schema"
import { ComponentBought as ComponentBoughtEvent } from "../generated/FlexBuild/FlexBuild"
import { handleComponentBought } from "../src/flex-build"
import { createComponentBoughtEvent } from "./flex-build-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let buyer = Address.fromString("0x0000000000000000000000000000000000000001")
    let component_id = BigInt.fromI32(234)
    let newComponentBoughtEvent = createComponentBoughtEvent(
      buyer,
      component_id
    )
    handleComponentBought(newComponentBoughtEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ComponentBought created and stored", () => {
    assert.entityCount("ComponentBought", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ComponentBought",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "buyer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ComponentBought",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "component_id",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
