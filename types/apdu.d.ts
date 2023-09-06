export function getDecodedType(buffer: any, offset: any): any;
export function setDecodedType(buffer: any, offset: any, type: any): void;
export function getDecodedInvokeId(buffer: any, offset: any): any;
export function encodeConfirmedServiceRequest(buffer: any, type: any, service: any, maxSegments: any, maxApdu: any, invokeId: any, sequencenumber: any, proposedWindowSize: any): void;
export function decodeConfirmedServiceRequest(buffer: any, offset: any): {
    len: number;
    type: any;
    service: any;
    maxSegments: number;
    maxApdu: number;
    invokeId: any;
    sequencenumber: number;
    proposedWindowNumber: number;
};
export function encodeUnconfirmedServiceRequest(buffer: any, type: any, service: any): void;
export function decodeUnconfirmedServiceRequest(buffer: any, offset: any): {
    len: number;
    type: any;
    service: any;
};
export function encodeSimpleAck(buffer: any, type: any, service: any, invokeId: any): void;
export function decodeSimpleAck(buffer: any, offset: any): {
    len: number;
    type: any;
    service: any;
    invokeId: any;
};
export function encodeComplexAck(buffer: any, type: any, service: any, invokeId: any, sequencenumber: any, proposedWindowNumber: any): number;
export function decodeComplexAck(buffer: any, offset: any): {
    len: number;
    type: any;
    service: any;
    invokeId: any;
    sequencenumber: number;
    proposedWindowNumber: number;
};
export function encodeSegmentAck(buffer: any, type: any, originalInvokeId: any, sequencenumber: any, actualWindowSize: any): void;
export function decodeSegmentAck(buffer: any, offset: any): {
    len: number;
    type: any;
    originalInvokeId: any;
    sequencenumber: any;
    actualWindowSize: any;
};
export function encodeResult(buffer: any, resultCode: any): void;
export function decodeResult(buffer: any, offset: any): {
    len: number;
    resultCode: any;
};
export function encodeError(buffer: any, type: any, service: any, invokeId: any): void;
export function decodeError(buffer: any, offset: any): {
    len: number;
    type: any;
    service: any;
    invokeId: any;
};
export function encodeAbort(buffer: any, type: any, invokeId: any, reason: any): void;
export function decodeAbort(buffer: any, offset: any): {
    len: number;
    type: any;
    invokeId: any;
    reason: any;
};
