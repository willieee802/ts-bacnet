export function encode(buffer: any, lowLimit: any, highLimit: any, objectId: any, objectName: any): void;
export function decode(buffer: any, offset: any, apduLen: any): {
    lowLimit: any;
    highLimit: any;
    objectId: {
        type: number;
        instance: number;
    };
    objectName: string;
    len: number;
};
