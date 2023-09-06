export function encode(buffer: Buffer, properties: any): void;
export function decode(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  len: number;
  properties: {
    objectId: {
      type: number;
      instance: number;
    };
    properties: {
      id: any;
      index: 4294967295;
    }[];
  }[];
};
export function encodeAcknowledge(buffer: Buffer, values: any): void;
export function decodeAcknowledge(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  len: number;
  values: any[];
};
