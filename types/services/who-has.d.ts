export function encode(
  buffer: Buffer,
  lowLimit: any,
  highLimit: any,
  objectId: any,
  objectName: any
): void;
export function decode(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  lowLimit: any;
  highLimit: any;
  objectId: {
    type: number;
    instance: number;
  };
  objectName: string;
  len: number;
};
