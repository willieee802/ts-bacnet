export function encode(
  buffer: Buffer,
  deviceId: any,
  objectId: any,
  objectName: any
): void;
export function decode(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  deviceId: {
    type: number;
    instance: number;
  };
  objectId: {
    type: number;
    instance: number;
  };
  objectName: string;
  len: number;
};
