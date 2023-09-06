export function decodeFunction(buffer: Buffer, offset: any): any;
export function decode(
  buffer: Buffer,
  offset: any
): {
  len: number;
  funct: any;
  destination: {
    type: number;
    net: number;
  };
  source: {
    type: number;
    net: number;
  };
  hopCount: number;
  networkMsgType: number;
  vendorId: number;
};
export function encode(
  buffer: Buffer,
  funct: any,
  destination: any,
  source: any,
  hopCount: any,
  networkMsgType: any,
  vendorId: any
): void;
