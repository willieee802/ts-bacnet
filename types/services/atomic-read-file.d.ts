export function encode(
  buffer: Buffer,
  isStream: any,
  objectId: any,
  position: any,
  count: any
): void;
export function decode(
  buffer: Buffer,
  offset: any
): {
  len: number;
  isStream: boolean;
  objectId: {};
  position: number;
  count: number;
};
export function encodeAcknowledge(
  buffer: Buffer,
  isStream: any,
  endOfFile: any,
  position: any,
  blockCount: any,
  blocks: any,
  counts: any
): void;
export function decodeAcknowledge(
  buffer: Buffer,
  offset: any
): {
  len: number;
  endOfFile: boolean;
  isStream: boolean;
  position: any;
  buffer: Buffer;
};
