export function encode(buffer: any, objectId: any, values: any): void;
export function decode(buffer: any, offset: any, apduLen: any): {
    len: number;
    objectId: {
        type: number;
        instance: number;
    };
    values: {
        property: {
            id: any;
            index: 4294967295;
        };
    }[];
};
export function encodeAcknowledge(buffer: any, objectId: any): void;
