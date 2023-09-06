export function encode(buffer: any, vendorId: any, serviceNumber: any, data: any): void;
export function decode(buffer: any, offset: any, apduLen: any): {
    vendorId: any;
    serviceNumber: any;
    data: any[];
    len: number;
};
