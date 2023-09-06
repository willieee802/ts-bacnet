export function encode(buffer: any, processId: any, requestingSource: any, operation: any, targetObjectId: any): void;
export function decode(buffer: any, offset: any, apduLen: any): {
    processId: any;
    requestingSource: string;
    operation: any;
    targetObjectId: {
        type: number;
        instance: number;
    };
    len: number;
};
