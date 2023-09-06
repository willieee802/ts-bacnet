export function getDecodedType(buffer: Buffer, offset: any): any;
export function setDecodedType(buffer: Buffer, offset: any, type: any): void;
export function getDecodedInvokeId(buffer: Buffer, offset: any): any;
export function encodeConfirmedServiceRequest(
  buffer: Buffer,
  type: any,
  service: any,
  maxSegments: any,
  maxApdu: any,
  invokeId: any,
  sequencenumber: any,
  proposedWindowSize: any
): void;
export function decodeConfirmedServiceRequest(
  buffer: Buffer,
  offset: any
): {
  len: number;
  type: any;
  service: any;
  maxSegments: number;
  maxApdu: number;
  invokeId: any;
  sequencenumber: number;
  proposedWindowNumber: number;
};
export function encodeUnconfirmedServiceRequest(
  buffer: Buffer,
  type: any,
  service: any
): void;
export function decodeUnconfirmedServiceRequest(
  buffer: Buffer,
  offset: any
): {
  len: number;
  type: any;
  service: any;
};
export function encodeSimpleAck(
  buffer: Buffer,
  type: any,
  service: any,
  invokeId: any
): void;
export function decodeSimpleAck(
  buffer: Buffer,
  offset: any
): {
  len: number;
  type: any;
  service: any;
  invokeId: any;
};
export function encodeComplexAck(
  buffer: Buffer,
  type: any,
  service: any,
  invokeId: any,
  sequencenumber: any,
  proposedWindowNumber: any
): number;
export function decodeComplexAck(
  buffer: Buffer,
  offset: any
): {
  len: number;
  type: any;
  service: any;
  invokeId: any;
  sequencenumber: number;
  proposedWindowNumber: number;
};
export function encodeSegmentAck(
  buffer: Buffer,
  type: any,
  originalInvokeId: any,
  sequencenumber: any,
  actualWindowSize: any
): void;
export function decodeSegmentAck(
  buffer: Buffer,
  offset: any
): {
  len: number;
  type: any;
  originalInvokeId: any;
  sequencenumber: any;
  actualWindowSize: any;
};
export function encodeResult(buffer: Buffer, resultCode: any): void;
export function decodeResult(
  buffer: Buffer,
  offset: any
): {
  len: number;
  resultCode: any;
};
export function encodeError(
  buffer: Buffer,
  type: any,
  service: any,
  invokeId: any
): void;
export function decodeError(
  buffer: Buffer,
  offset: any
): {
  len: number;
  type: any;
  service: any;
  invokeId: any;
};
export function encodeAbort(
  buffer: Buffer,
  type: any,
  invokeId: any,
  reason: any
): void;
export function decodeAbort(
  buffer: Buffer,
  offset: any
): {
  len: number;
  type: any;
  invokeId: any;
  reason: any;
};
