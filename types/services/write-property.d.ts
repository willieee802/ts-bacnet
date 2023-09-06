export function encode(
  buffer: Buffer,
  objectType: any,
  objectInstance: any,
  propertyId: any,
  arrayIndex: any,
  priority: any,
  values: any
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
  value: {
    property: {};
  };
};
