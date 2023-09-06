export function encode(
  buffer: Buffer,
  deviceId: any,
  maxApdu: any,
  segmentation: any,
  vendorId: any
): void;
export function decode(
  buffer: Buffer,
  offset: any
): {
  len: number;
  deviceId: number;
  maxApdu: any;
  segmentation: any;
  vendorId: any;
};
