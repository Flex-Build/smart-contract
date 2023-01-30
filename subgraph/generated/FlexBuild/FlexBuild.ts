// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ComponentBought extends ethereum.Event {
  get params(): ComponentBought__Params {
    return new ComponentBought__Params(this);
  }
}

export class ComponentBought__Params {
  _event: ComponentBought;

  constructor(event: ComponentBought) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get component_id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ComponentCreated extends ethereum.Event {
  get params(): ComponentCreated__Params {
    return new ComponentCreated__Params(this);
  }
}

export class ComponentCreated__Params {
  _event: ComponentCreated;

  constructor(event: ComponentCreated) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get code_hash(): string {
    return this._event.parameters[1].value.toString();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class FlexBuild__id_to_componentResult {
  value0: Address;
  value1: string;
  value2: BigInt;

  constructor(value0: Address, value1: string, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getOwner(): Address {
    return this.value0;
  }

  getCode_hash(): string {
    return this.value1;
  }

  getPrice(): BigInt {
    return this.value2;
  }
}

export class FlexBuild__id_to_orderResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getBuyer(): Address {
    return this.value0;
  }

  getComponent_id(): BigInt {
    return this.value1;
  }
}

export class FlexBuild extends ethereum.SmartContract {
  static bind(address: Address): FlexBuild {
    return new FlexBuild("FlexBuild", address);
  }

  id_to_component(param0: BigInt): FlexBuild__id_to_componentResult {
    let result = super.call(
      "id_to_component",
      "id_to_component(uint256):(address,string,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new FlexBuild__id_to_componentResult(
      result[0].toAddress(),
      result[1].toString(),
      result[2].toBigInt()
    );
  }

  try_id_to_component(
    param0: BigInt
  ): ethereum.CallResult<FlexBuild__id_to_componentResult> {
    let result = super.tryCall(
      "id_to_component",
      "id_to_component(uint256):(address,string,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new FlexBuild__id_to_componentResult(
        value[0].toAddress(),
        value[1].toString(),
        value[2].toBigInt()
      )
    );
  }

  id_to_order(param0: BigInt): FlexBuild__id_to_orderResult {
    let result = super.call(
      "id_to_order",
      "id_to_order(uint256):(address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new FlexBuild__id_to_orderResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_id_to_order(
    param0: BigInt
  ): ethereum.CallResult<FlexBuild__id_to_orderResult> {
    let result = super.tryCall(
      "id_to_order",
      "id_to_order(uint256):(address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new FlexBuild__id_to_orderResult(
        value[0].toAddress(),
        value[1].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BuyComponentsCall extends ethereum.Call {
  get inputs(): BuyComponentsCall__Inputs {
    return new BuyComponentsCall__Inputs(this);
  }

  get outputs(): BuyComponentsCall__Outputs {
    return new BuyComponentsCall__Outputs(this);
  }
}

export class BuyComponentsCall__Inputs {
  _call: BuyComponentsCall;

  constructor(call: BuyComponentsCall) {
    this._call = call;
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class BuyComponentsCall__Outputs {
  _call: BuyComponentsCall;

  constructor(call: BuyComponentsCall) {
    this._call = call;
  }
}

export class CreateComponentCall extends ethereum.Call {
  get inputs(): CreateComponentCall__Inputs {
    return new CreateComponentCall__Inputs(this);
  }

  get outputs(): CreateComponentCall__Outputs {
    return new CreateComponentCall__Outputs(this);
  }
}

export class CreateComponentCall__Inputs {
  _call: CreateComponentCall;

  constructor(call: CreateComponentCall) {
    this._call = call;
  }

  get code_hash(): string {
    return this._call.inputValues[0].value.toString();
  }

  get price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateComponentCall__Outputs {
  _call: CreateComponentCall;

  constructor(call: CreateComponentCall) {
    this._call = call;
  }
}
