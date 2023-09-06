export function encode(buffer: Buffer, state: any, password: any): void;
export function decode(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  state: any;
  password: any;
  len: number;
};
