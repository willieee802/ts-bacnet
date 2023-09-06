export function encode(buffer: any, deviceId: any, objectId: any, objectName: any): void;
export function decode(buffer: any, offset: any, apduLen: any): {
    deviceId: {
        type: number;
        instance: number;
    };
    objectId: {
        type: number;
        instance: number;
    };
    objectName: string;
    len: number;
};
