import * as baAsn1 from "./asn1";
import * as baEnum from "./enum";
import { BufferWithOffset } from "./types";

export const getDecodedType = (buffer, offset) => {
  return buffer[offset];
};

export const setDecodedType = (buffer, offset, type) => {
  buffer[offset] = type;
};

export const getDecodedInvokeId = (buffer, offset) => {
  const type = getDecodedType(buffer, offset);
  switch (type & baEnum.PDU_TYPE_MASK) {
    case baEnum.PduType.SIMPLE_ACK:
    case baEnum.PduType.COMPLEX_ACK:
    case baEnum.PduType.ERROR:
    case baEnum.PduType.REJECT:
    case baEnum.PduType.ABORT:
      return buffer[offset + 1];
    case baEnum.PduType.CONFIRMED_REQUEST:
      return buffer[offset + 2];
    default:
      return undefined;
  }
};

export const encodeConfirmedServiceRequest = (
  buffer: BufferWithOffset,
  type: baEnum.PduType,
  service: number,
  maxSegments?: number,
  maxApdu?: number,
  invokeId?: number,
  sequencenumber?: number,
  proposedWindowSize?: number
) => {
  buffer.buffer[buffer.offset++] = type;
  buffer.buffer[buffer.offset++] = maxSegments | maxApdu;
  buffer.buffer[buffer.offset++] = invokeId;
  if ((type & baEnum.PduConReqBit.SEGMENTED_MESSAGE) > 0) {
    buffer.buffer[buffer.offset++] = sequencenumber;
    buffer.buffer[buffer.offset++] = proposedWindowSize;
  }
  buffer.buffer[buffer.offset++] = service;
};

export const decodeConfirmedServiceRequest = (buffer, offset) => {
  const orgOffset = offset;
  const type = buffer[offset++];
  const maxSegments = buffer[offset] & 0xf0;
  const maxApdu = buffer[offset++] & 0x0f;
  const invokeId = buffer[offset++];
  let sequencenumber = 0;
  let proposedWindowNumber = 0;
  if ((type & baEnum.PduConReqBit.SEGMENTED_MESSAGE) > 0) {
    sequencenumber = buffer[offset++];
    proposedWindowNumber = buffer[offset++];
  }
  const service = buffer[offset++];
  return {
    len: offset - orgOffset,
    type,
    service,
    maxSegments,
    maxApdu,
    invokeId,
    sequencenumber,
    proposedWindowNumber,
  };
};

export const encodeUnconfirmedServiceRequest = (buffer, type, service) => {
  buffer.buffer[buffer.offset++] = type;
  buffer.buffer[buffer.offset++] = service;
};

export const decodeUnconfirmedServiceRequest = (buffer, offset) => {
  const orgOffset = offset;
  const type = buffer[offset++];
  const service = buffer[offset++];
  return {
    len: offset - orgOffset,
    type,
    service,
  };
};

export const encodeSimpleAck = (buffer, type, service, invokeId) => {
  buffer.buffer[buffer.offset++] = type;
  buffer.buffer[buffer.offset++] = invokeId;
  buffer.buffer[buffer.offset++] = service;
};

export const decodeSimpleAck = (buffer, offset) => {
  const orgOffset = offset;
  const type = buffer[offset++];
  const invokeId = buffer[offset++];
  const service = buffer[offset++];
  return {
    len: offset - orgOffset,
    type,
    service,
    invokeId,
  };
};

export const encodeComplexAck = (
  buffer: BufferWithOffset,
  type: baEnum.PduType,
  service?: number,
  invokeId?: number,
  sequencenumber?: number,
  proposedWindowNumber?: number
) => {
  let len = 3;
  buffer.buffer[buffer.offset++] = type;
  buffer.buffer[buffer.offset++] = invokeId;
  if ((type & baEnum.PduConReqBit.SEGMENTED_MESSAGE) > 0) {
    buffer.buffer[buffer.offset++] = sequencenumber;
    buffer.buffer[buffer.offset++] = proposedWindowNumber;
    len += 2;
  }
  buffer.buffer[buffer.offset++] = service;
  return len;
};

export const decodeComplexAck = (buffer, offset) => {
  const orgOffset = offset;
  const type = buffer[offset++];
  const invokeId = buffer[offset++];
  let sequencenumber = 0;
  let proposedWindowNumber = 0;
  if ((type & baEnum.PduConReqBit.SEGMENTED_MESSAGE) > 0) {
    sequencenumber = buffer[offset++];
    proposedWindowNumber = buffer[offset++];
  }
  const service = buffer[offset++];
  return {
    len: offset - orgOffset,
    type,
    service,
    invokeId,
    sequencenumber,
    proposedWindowNumber,
  };
};

export const encodeSegmentAck = (
  buffer,
  type,
  originalInvokeId,
  sequencenumber,
  actualWindowSize
) => {
  buffer.buffer[buffer.offset++] = type;
  buffer.buffer[buffer.offset++] = originalInvokeId;
  buffer.buffer[buffer.offset++] = sequencenumber;
  buffer.buffer[buffer.offset++] = actualWindowSize;
};

export const decodeSegmentAck = (buffer, offset) => {
  const orgOffset = offset;
  const type = buffer[offset++];
  const originalInvokeId = buffer[offset++];
  const sequencenumber = buffer[offset++];
  const actualWindowSize = buffer[offset++];
  return {
    len: offset - orgOffset,
    type,
    originalInvokeId,
    sequencenumber,
    actualWindowSize,
  };
};

export const encodeResult = (buffer, /* BvlcResultFormat */ resultCode) => {
  baAsn1.encodeUnsigned(buffer, resultCode, 2);
};

export const decodeResult = (buffer, offset) => {
  const orgOffset = offset;
  const decode = baAsn1.decodeUnsigned(buffer, offset, 2);
  offset += decode.len;
  return {
    len: offset - orgOffset,
    resultCode: decode.value, // BvlcResultFormat
  };
};

export const encodeError = (buffer, type, service, invokeId) => {
  buffer.buffer[buffer.offset++] = type;
  buffer.buffer[buffer.offset++] = invokeId;
  buffer.buffer[buffer.offset++] = service;
};

export const decodeError = (buffer, offset) => {
  const orgOffset = offset;
  const type = buffer[offset++];
  const invokeId = buffer[offset++];
  const service = buffer[offset++];
  return {
    len: offset - orgOffset,
    type,
    service,
    invokeId,
  };
};

export const encodeAbort = (buffer, type, invokeId, reason) => {
  buffer.buffer[buffer.offset++] = type;
  buffer.buffer[buffer.offset++] = invokeId;
  buffer.buffer[buffer.offset++] = reason;
};

export const decodeAbort = (buffer, offset) => {
  const orgOffset = offset;
  const type = buffer[offset++];
  const invokeId = buffer[offset++];
  const reason = buffer[offset++];
  return {
    len: offset - orgOffset,
    type,
    invokeId,
    reason,
  };
};
