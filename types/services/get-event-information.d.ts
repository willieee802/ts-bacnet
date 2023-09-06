export function encode(buffer: any, lastReceivedObjectId: any): void;
export function decode(buffer: any, offset: any): {
    lastReceivedObjectId: {
        type: number;
        instance: number;
    };
    len: number;
};
export function encodeAcknowledge(buffer: any, events: any, moreEvents: any): void;
export function decodeAcknowledge(buffer: any, offset: any, apduLen: any): {
    events: any[];
    moreEvents: boolean;
    len: number;
};
