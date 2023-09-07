import * as baAsn1 from "../asn1";
import * as baEnum from "../enum";

export const encode = (buffer, errorClass, errorCode) => {
  baAsn1.encodeApplicationEnumerated(buffer, errorClass);
  baAsn1.encodeApplicationEnumerated(buffer, errorCode);
};

export const decode = (buffer, offset) => {
  const orgOffset = offset;
  let result;
  result = baAsn1.decodeTagNumberAndValue(buffer, offset);
  offset += result.len;
  const errorClass = baAsn1.decodeEnumerated(buffer, offset, result.value);
  offset += errorClass.len;
  result = baAsn1.decodeTagNumberAndValue(buffer, offset);
  offset += result.len;
  const errorCode = baAsn1.decodeEnumerated(buffer, offset, result.value);
  offset += errorClass.len;
  return {
    len: offset - orgOffset,
    class: errorClass.value,
    code: errorCode.value,
  };
};

interface result {
  len?: number;
  class: baEnum.ErrorClass;
  code: baEnum.ErrorCode;
}
export const buildMessage = function (result: result) {
  return (
    "BacnetError Class: " +
    baEnum.ErrorClassName[result.class] +
    " " +
    "(" +
    result.class +
    ") " +
    "Code: " +
    baEnum.ErrorCodeName[result.code] +
    " (" +
    result.code +
    ")"
  );
};
