export function encode(buffer: any, state: any, password: any): void;
export function decode(buffer: any, offset: any, apduLen: any): {
    state: any;
    password: any;
    len: number;
};
