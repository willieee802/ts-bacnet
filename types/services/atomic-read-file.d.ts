export function encode(buffer: any, isStream: any, objectId: any, position: any, count: any): void;
export function decode(buffer: any, offset: any): {
    len: number;
    isStream: boolean;
    objectId: {};
    position: number;
    count: number;
};
export function encodeAcknowledge(buffer: any, isStream: any, endOfFile: any, position: any, blockCount: any, blocks: any, counts: any): void;
export function decodeAcknowledge(buffer: any, offset: any): {
    len: number;
    endOfFile: boolean;
    isStream: boolean;
    position: any;
    buffer: any;
};
