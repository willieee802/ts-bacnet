export function encode(buffer: any, deviceId: any, maxApdu: any, segmentation: any, vendorId: any): void;
export function decode(buffer: any, offset: any): {
    len: number;
    deviceId: number;
    maxApdu: any;
    segmentation: any;
    vendorId: any;
};
