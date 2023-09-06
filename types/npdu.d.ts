export function decodeFunction(buffer: any, offset: any): any;
export function decode(buffer: any, offset: any): {
    len: number;
    funct: any;
    destination: {
        type: number;
        net: number;
    };
    source: {
        type: number;
        net: number;
    };
    hopCount: number;
    networkMsgType: number;
    vendorId: number;
};
export function encode(buffer: any, funct: any, destination: any, source: any, hopCount: any, networkMsgType: any, vendorId: any): void;
