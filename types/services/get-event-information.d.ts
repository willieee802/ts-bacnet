export function encode(buffer: Buffer, lastReceivedObjectId: any): void;
export function decode(
  buffer: Buffer,
  offset: any
): {
  lastReceivedObjectId: {
    type: number;
    instance: number;
  };
  len: number;
};
export function encodeAcknowledge(
  buffer: Buffer,
  events: any,
  moreEvents: any
): void;
export function decodeAcknowledge(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  events: any[];
  moreEvents: boolean;
  len: number;
};
