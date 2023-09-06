export function encode(
  buffer: Buffer,
  objectType: any,
  objectInstance: any,
  propertyId: any,
  arrayIndex: any
): void;
export function decode(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  len: number;
  objectId: {
    type: number;
    instance: number;
  };
  property: {
    id: any;
    index: any;
  };
};
export function encodeAcknowledge(
  buffer: Buffer,
  objectId: any,
  propertyId: any,
  arrayIndex: any,
  values: any
): void;
export function decodeAcknowledge(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  len: number;
  objectId: {
    type: number;
    instance: number;
  };
  property: {
    id: any;
    index: any;
  };
  values: any[];
};
