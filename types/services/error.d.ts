export function encode(buffer: Buffer, errorClass: any, errorCode: any): void;
export function decode(
  buffer: Buffer,
  offset: any
): {
  len: number;
  class: any;
  code: any;
};
export function buildMessage(result: any): string;
