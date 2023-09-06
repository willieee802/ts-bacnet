export function encode(buffer: Buffer, objectId: any, values: any): void;
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
  values: {
    property: {
      id: any;
      index: 4294967295;
    };
    value: any[];
    priority: 0;
  }[];
};
export function encodeObject(buffer: Buffer, values: any): void;
