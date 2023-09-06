export function encode(
  buffer: Buffer,
  processId: any,
  requestingSource: any,
  operation: any,
  targetObjectId: any
): void;
export function decode(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  processId: any;
  requestingSource: string;
  operation: any;
  targetObjectId: {
    type: number;
    instance: number;
  };
  len: number;
};
