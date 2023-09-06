export function encode(
  buffer: Buffer,
  vendorId: any,
  serviceNumber: any,
  data: any
): void;
export function decode(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  vendorId: any;
  serviceNumber: any;
  data: any[];
  len: number;
};
