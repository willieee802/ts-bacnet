export function encode(buffer: any, properties: any): void;
export function decode(buffer: any, offset: any, apduLen: any): {
    len: number;
    properties: {
        objectId: {
            type: number;
            instance: number;
        };
        properties: {
            id: any;
            index: 4294967295;
        }[];
    }[];
};
export function encodeAcknowledge(buffer: any, values: any): void;
export function decodeAcknowledge(buffer: any, offset: any, apduLen: any): {
    len: number;
    values: any[];
};
