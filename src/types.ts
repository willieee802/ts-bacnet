import {
  ApplicationTag,
  CharacterStringEncoding,
  ObjectType,
  PropertyIdentifier,
} from "./enum";

export interface BacnetObjectIdentity {
  type: ObjectType;
  instance: number;
}

export interface SetBACnetValueMultiple {
  objectId: BacnetObjectIdentity;
  values: SetBACnetValueObject[];
}

export interface SetBACnetValueObject {
  property: ValueAddress;

  value: SetBacnetValueObjectValue[];

  priority: number;
}

export interface SetBacnetValueObjectValue {
  type: ApplicationTag;
  value: number | string | boolean | number[] | string[] | boolean[];
}

interface ValueAddress {
  id: number;
  index: number;
}

export interface BacnetDevice {
  len: number;
  type: number; // should be a enum in "enum.ts" but not sure which
  service: number;
  header: Header;
  payload: Payload;
}

export interface Header {
  func: number;
  sender: Sender;
  apduType: number;
  expectingReply: boolean;
  confirmedService: boolean;
}

export interface BACError {
  [key: string]: string;
}

export interface Sender {
  address: string; // ip address
  forwardedFrom: null;
}

export interface Payload {
  len: number;
  deviceId: number;
  maxApdu: number;
  segmentation: number;
  vendorId: number;
}

interface ReadPropertiesOptions {
  session?: string;
  updateProperty?: boolean;
  saveValuesInDb?: boolean;
}

//
export type BufferWithOffset = {
  buffer: Buffer | Uint8Array;
  offset: number;
};

export interface BACReadMultiple {
  len: number;
  values: BACValueGroup[];
}

interface BACValueGroup {
  objectId: BacnetObjectIdentity;
  values: BACValue[];
}

export interface BACValue extends ValueAddress {
  value: BACSubValue[];
}

interface BACSubValue {
  encoding?: CharacterStringEncoding;
  type: ApplicationTag;
  value: number | string;
}

export interface ReadProperty {
  objectId: BacnetObjectIdentity;
  properties: {
    id: PropertyIdentifier;
  }[];
}
