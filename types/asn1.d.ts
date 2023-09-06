export const START_YEAR: 1900;
export const MAX_YEARS: 256;
export function encodeUnsigned(buffer: Buffer, value: any, length: any): void;
export function decodeUnsigned(
  buffer: Buffer,
  offset: any,
  length: any
): {
  len: any;
  value: any;
};
export function decodeEnumerated(
  buffer: Buffer,
  offset: any,
  lenValue: any
): {
  len: any;
  value: any;
};
export function encodeBacnetObjectId(
  buffer: Buffer,
  objectType: any,
  instance: any
): void;
export function encodeTag(
  buffer: Buffer,
  tagNumber: any,
  contextSpecific: any,
  lenValueType: any
): void;
export function encodeContextReal(
  buffer: Buffer,
  tagNumber: any,
  value: any
): void;
export function encodeContextUnsigned(
  buffer: Buffer,
  tagNumber: any,
  value: any
): void;
export function encodeContextEnumerated(
  buffer: Buffer,
  tagNumber: any,
  value: any
): void;
export function encodeApplicationOctetString(
  buffer: Buffer,
  octetString: any,
  octetOffset: any,
  octetCount: any
): void;
export function encodeApplicationBoolean(
  buffer: Buffer,
  booleanValue: any
): void;
export function encodeApplicationObjectId(
  buffer: Buffer,
  objectType: any,
  instance: any
): void;
export function encodeApplicationUnsigned(buffer: Buffer, value: any): void;
export function encodeApplicationEnumerated(buffer: Buffer, value: any): void;
export function encodeApplicationSigned(buffer: Buffer, value: any): void;
export function encodeApplicationBitstring(
  buffer: Buffer,
  bitString: any
): void;
export function encodeBacnetDate(buffer: Buffer, value: any): void;
export function encodeApplicationDate(buffer: Buffer, value: any): void;
export function encodeApplicationTime(buffer: Buffer, value: any): void;
export function encodeContextObjectId(
  buffer: Buffer,
  tagNumber: any,
  objectType: any,
  instance: any
): void;
export function encodeOpeningTag(buffer: Buffer, tagNumber: any): void;
export function encodeClosingTag(buffer: Buffer, tagNumber: any): void;
export function encodeReadAccessSpecification(buffer: Buffer, value: any): void;
export function encodeContextBoolean(
  buffer: Buffer,
  tagNumber: any,
  booleanValue: any
): void;
export function bacappEncodeApplicationData(buffer: Buffer, value: any): void;
export function bacappEncodeContextDeviceObjPropertyRef(
  buffer: Buffer,
  tagNumber: any,
  value: any
): void;
export function bacappEncodePropertyState(buffer: Buffer, value: any): void;
export function encodeContextBitstring(
  buffer: Buffer,
  tagNumber: any,
  bitString: any
): void;
export function encodeContextSigned(
  buffer: Buffer,
  tagNumber: any,
  value: any
): void;
export function decodeTagNumber(
  buffer: Buffer,
  offset: any
): {
  len: number;
  tagNumber: any;
};
export function decodeIsContextTag(
  buffer: Buffer,
  offset: any,
  tagNumber: any
): boolean;
export function decodeIsOpeningTagNumber(
  buffer: Buffer,
  offset: any,
  tagNumber: any
): boolean;
export function decodeIsClosingTagNumber(
  buffer: Buffer,
  offset: any,
  tagNumber: any
): boolean;
export function decodeIsClosingTag(buffer: Buffer, offset: any): boolean;
export function decodeIsOpeningTag(buffer: Buffer, offset: any): boolean;
export function decodeObjectId(
  buffer: Buffer,
  offset: any
): {
  len: any;
  objectType: number;
  instance: number;
};
export function decodeTagNumberAndValue(
  buffer: Buffer,
  offset: any
): {
  len: number;
  tagNumber: any;
  value: any;
};
export function bacappDecodeApplicationData(
  buffer: Buffer,
  offset: any,
  maxOffset: any,
  objectType: any,
  propertyId: any
): any;
export function encodeReadAccessResult(buffer: Buffer, value: any): void;
export function decodeReadAccessResult(
  buffer: Buffer,
  offset: any,
  apduLen: any
):
  | -1
  | {
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
export function decodeSigned(
  buffer: Buffer,
  offset: any,
  length: any
): {
  len: any;
  value: any;
};
export function decodeReal(
  buffer: Buffer,
  offset: any
): {
  len: number;
  value: any;
};
export function decodeOctetString(
  buffer: Buffer,
  offset: any,
  maxLength: any,
  octetStringOffset: any,
  octetStringLength: any
): {
  len: any;
  value: any[];
};
export function decodeCharacterString(
  buffer: Buffer,
  offset: any,
  maxLength: any,
  lenValue: any
): {
  value: string;
  len: any;
  encoding: any;
};
export function decodeBitstring(
  buffer: Buffer,
  offset: any,
  lenValue: any
): {
  len: number;
  value: {
    value: any[];
  };
};
export function decodeDate(
  buffer: Buffer,
  offset: any
): {
  len: number;
  value: Date;
};
export function decodeApplicationDate(
  buffer: Buffer,
  offset: any
): {
  len: number;
  value: {
    len: number;
    value: Date;
  };
};
export function decodeBacnetTime(
  buffer: Buffer,
  offset: any
): {
  len: number;
  value: Date;
};
export function decodeApplicationTime(
  buffer: Buffer,
  offset: any
): {
  len: number;
  value: {
    len: number;
    value: Date;
  };
};
export function decodeReadAccessSpecification(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
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
export function bacappEncodeTimestamp(buffer: Buffer, value: any): void;
export function bacappEncodeContextTimestamp(
  buffer: Buffer,
  tagNumber: any,
  value: any
): void;
export function decodeContextCharacterString(
  buffer: Buffer,
  offset: any,
  maxLength: any,
  tagNumber: any
): {
  len: number;
  value: string;
  encoding: any;
};
export function decodeContextObjectId(
  buffer: Buffer,
  offset: any,
  tagNumber: any
): {
  len: any;
  objectType: number;
  instance: number;
};
export function encodeApplicationCharacterString(
  buffer: Buffer,
  value: any,
  encoding: any
): void;
export function encodeContextCharacterString(
  buffer: Buffer,
  tagNumber: any,
  value: any,
  encoding: any
): void;
