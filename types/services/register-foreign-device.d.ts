export function encode(buffer: any, ttl: any, length?: number): void;
export function decode(buffer: any, offset: any, length?: number): {
    len: number;
    ttl: any;
};
