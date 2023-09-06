export function encode(buffer: any, isStream: any, objectId: any, position: any, blocks: any): void;
export function decode(buffer: any, offset: any, apduLen: any): {
    len: number;
    isStream: boolean;
    objectId: {
        type: number;
        instance: number;
    };
    position: any;
    blocks: any[][];
};
export function encodeAcknowledge(buffer: any, isStream: any, position: any): void;
export function decodeAcknowledge(buffer: any, offset: any): {
    len: number;
    isStream: boolean;
    position: number;
};
