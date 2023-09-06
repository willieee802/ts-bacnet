export function encode(
  buffer: Buffer,
  objectId: any,
  propertyId: any,
  arrayIndex: any,
  values: any
): void;
export function decode(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  objectId: {
    type: number;
    instance: number;
  };
  property: {
    id: any;
  };
  values: any[];
  len: number;
};
