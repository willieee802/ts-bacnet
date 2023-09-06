export function encode(buffer: any, objectType: any, objectInstance: any, propertyId: any, arrayIndex: any): void;
export function decode(buffer: any, offset: any, apduLen: any): {
    len: number;
    objectId: {
        type: number;
        instance: number;
    };
    property: {
        id: any;
        index: any;
    };
};
export function encodeAcknowledge(buffer: any, objectId: any, propertyId: any, arrayIndex: any, values: any): void;
export function decodeAcknowledge(buffer: any, offset: any, apduLen: any): {
    len: number;
    objectId: {
        type: number;
        instance: number;
    };
    property: {
        id: any;
        index: any;
    };
    values: any[];
};
