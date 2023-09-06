export function encode(
  buffer: Buffer,
  func: any,
  msgLength: any,
  originatingIP: any
): number;
export function decode(
  buffer: Buffer,
  _offset: any
): {
  len: number;
  func: any;
  msgLength: number;
  originatingIP: any;
};
