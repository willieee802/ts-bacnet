export function encode(
  buffer: Buffer,
  timeDuration: any,
  enableDisable: any,
  password: any
): void;
export function decode(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  timeDuration: any;
  enableDisable: any;
  password: string;
  len: number;
};
