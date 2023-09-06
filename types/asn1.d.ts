export const START_YEAR: 1900;
export const MAX_YEARS: 256;
export function encodeUnsigned(buffer: any, value: any, length: any): void;
export function decodeUnsigned(buffer: any, offset: any, length: any): {
    len: any;
    value: any;
};
export function decodeEnumerated(buffer: any, offset: any, lenValue: any): {
    len: any;
    value: any;
};
export function encodeBacnetObjectId(buffer: any, objectType: any, instance: any): void;
export function encodeTag(buffer: any, tagNumber: any, contextSpecific: any, lenValueType: any): void;
export function encodeContextReal(buffer: any, tagNumber: any, value: any): void;
export function encodeContextUnsigned(buffer: any, tagNumber: any, value: any): void;
export function encodeContextEnumerated(buffer: any, tagNumber: any, value: any): void;
export function encodeApplicationOctetString(buffer: any, octetString: any, octetOffset: any, octetCount: any): void;
export function encodeApplicationBoolean(buffer: any, booleanValue: any): void;
export function encodeApplicationObjectId(buffer: any, objectType: any, instance: any): void;
export function encodeApplicationUnsigned(buffer: any, value: any): void;
export function encodeApplicationEnumerated(buffer: any, value: any): void;
export function encodeApplicationSigned(buffer: any, value: any): void;
export function encodeApplicationBitstring(buffer: any, bitString: any): void;
export function encodeBacnetDate(buffer: any, value: any): void;
export function encodeApplicationDate(buffer: any, value: any): void;
export function encodeApplicationTime(buffer: any, value: any): void;
export function encodeContextObjectId(buffer: any, tagNumber: any, objectType: any, instance: any): void;
export function encodeOpeningTag(buffer: any, tagNumber: any): void;
export function encodeClosingTag(buffer: any, tagNumber: any): void;
export function encodeReadAccessSpecification(buffer: any, value: any): void;
export function encodeContextBoolean(buffer: any, tagNumber: any, booleanValue: any): void;
export function bacappEncodeApplicationData(buffer: any, value: any): void;
export function bacappEncodeContextDeviceObjPropertyRef(buffer: any, tagNumber: any, value: any): void;
export function bacappEncodePropertyState(buffer: any, value: any): void;
export function encodeContextBitstring(buffer: any, tagNumber: any, bitString: any): void;
export function encodeContextSigned(buffer: any, tagNumber: any, value: any): void;
export function decodeTagNumber(buffer: any, offset: any): {
    len: number;
    tagNumber: any;
};
export function decodeIsContextTag(buffer: any, offset: any, tagNumber: any): boolean;
export function decodeIsOpeningTagNumber(buffer: any, offset: any, tagNumber: any): boolean;
export function decodeIsClosingTagNumber(buffer: any, offset: any, tagNumber: any): boolean;
export function decodeIsClosingTag(buffer: any, offset: any): boolean;
export function decodeIsOpeningTag(buffer: any, offset: any): boolean;
export function decodeObjectId(buffer: any, offset: any): {
    len: any;
    objectType: number;
    instance: number;
};
export function decodeTagNumberAndValue(buffer: any, offset: any): {
    len: number;
    tagNumber: any;
    value: any;
};
export function bacappDecodeApplicationData(buffer: any, offset: any, maxOffset: any, objectType: any, propertyId: any): any;
export function encodeReadAccessResult(buffer: any, value: any): void;
export function decodeReadAccessResult(buffer: any, offset: any, apduLen: any): -1 | {
    len: number;
    value: {
        objectId: {
            type: number;
            instance: number;
        };
        values: {
            id: any;
        }[];
    };
};
export function decodeSigned(buffer: any, offset: any, length: any): {
    len: any;
    value: any;
};
export function decodeReal(buffer: any, offset: any): {
    len: number;
    value: any;
};
export function decodeOctetString(buffer: any, offset: any, maxLength: any, octetStringOffset: any, octetStringLength: any): {
    len: any;
    value: any[];
};
export function decodeCharacterString(buffer: any, offset: any, maxLength: any, lenValue: any): {
    value: string;
    len: any;
    encoding: any;
};
export function decodeBitstring(buffer: any, offset: any, lenValue: any): {
    len: number;
    value: {
        value: any[];
    };
};
export function decodeDate(buffer: any, offset: any): {
    len: number;
    value: Date;
};
export function decodeApplicationDate(buffer: any, offset: any): {
    len: number;
    value: {
        len: number;
        value: Date;
    };
};
export function decodeBacnetTime(buffer: any, offset: any): {
    len: number;
    value: Date;
};
export function decodeApplicationTime(buffer: any, offset: any): {
    len: number;
    value: {
        len: number;
        value: Date;
    };
};
export function decodeReadAccessSpecification(buffer: any, offset: any, apduLen: any): {
    len: number;
    value: {
        objectId: {
            type: number;
            instance: number;
        };
        properties: {
            id: any;
            index: 4294967295;
        }[];
    };
};
export function bacappEncodeTimestamp(buffer: any, value: any): void;
export function bacappEncodeContextTimestamp(buffer: any, tagNumber: any, value: any): void;
export function decodeContextCharacterString(buffer: any, offset: any, maxLength: any, tagNumber: any): {
    len: number;
    value: string;
    encoding: any;
};
export function decodeContextObjectId(buffer: any, offset: any, tagNumber: any): {
    len: any;
    objectType: number;
    instance: number;
};
export function encodeApplicationCharacterString(buffer: any, value: any, encoding: any): void;
export function encodeContextCharacterString(buffer: any, tagNumber: any, value: any, encoding: any): void;
