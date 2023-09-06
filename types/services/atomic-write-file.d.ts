export function encode(
  buffer: Buffer,
  isStream: any,
  objectId: any,
  position: any,
  blocks: any
): void;
export function decode(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  len: number;
  isStream: boolean;
  objectId: {
    type: number;
    instance: number;
  };
  position: any;
  blocks: any[][];
};
export function encodeAcknowledge(
  buffer: Buffer,
  isStream: any,
  position: any
): void;
export function decodeAcknowledge(
  buffer: Buffer,
  offset: any
): {
  len: number;
  isStream: boolean;
  position: number;
};
