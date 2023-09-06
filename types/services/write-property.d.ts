export function encode(buffer: any, objectType: any, objectInstance: any, propertyId: any, arrayIndex: any, priority: any, values: any): void;
export function decode(buffer: any, offset: any, apduLen: any): {
    len: number;
    objectId: {
        type: number;
        instance: number;
    };
    value: {
        property: {};
    };
};
