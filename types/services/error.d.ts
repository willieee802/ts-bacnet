export function encode(buffer: any, errorClass: any, errorCode: any): void;
export function decode(buffer: any, offset: any): {
    len: number;
    class: any;
    code: any;
};
export function buildMessage(result: any): string;
