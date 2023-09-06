export function decode(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  len: any;
  objectType: number;
  instance: number;
};
export function encode(buffer: Buffer, objectId: any): void;
