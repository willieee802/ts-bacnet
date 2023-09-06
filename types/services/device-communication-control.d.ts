export function encode(buffer: any, timeDuration: any, enableDisable: any, password: any): void;
export function decode(buffer: any, offset: any, apduLen: any): {
    timeDuration: any;
    enableDisable: any;
    password: string;
    len: number;
};
