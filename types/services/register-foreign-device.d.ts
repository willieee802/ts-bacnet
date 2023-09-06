export function encode(buffer: Buffer, ttl: any, length?: number): void;
export function decode(
  buffer: Buffer,
  offset: any,
  length?: number
): {
  len: number;
  ttl: any;
};
