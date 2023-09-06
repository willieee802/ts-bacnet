export function encode(buffer: Buffer, time: any): void;
export function decode(
  buffer: Buffer,
  offset: any,
  length: any
): {
  len: number;
  value: Date;
};
