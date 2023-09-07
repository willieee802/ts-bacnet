import * as baAsn1 from "../asn1";
import * as baEnum from "../enum";

export const encode = (buffer, deviceId, objectId, objectName) => {
  baAsn1.encodeApplicationObjectId(buffer, deviceId.type, deviceId.instance);
  baAsn1.encodeApplicationObjectId(buffer, objectId.type, objectId.instance);
  baAsn1.encodeApplicationCharacterString(buffer, objectName);
};

interface value {
  deviceId?: {
    type: number;
    instance: number;
  };
  objectId?: {
    type: number;
    instance: number;
  };
  objectName?: string;
  len?: number;
}

export const decode = (buffer, offset, apduLen) => {
  let len = 0;
  let result;
  let decodedValue;
  let value: value = {};
  result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
  len += result.len;
  decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
  len += decodedValue.len;
  value.deviceId = {
    type: decodedValue.objectType,
    instance: decodedValue.instance,
  };
  result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
  len += result.len;
  decodedValue = baAsn1.decodeObjectId(buffer, offset + len);
  len += decodedValue.len;
  value.objectId = {
    type: decodedValue.objectType,
    instance: decodedValue.instance,
  };
  result = baAsn1.decodeTagNumberAndValue(buffer, offset + len);
  len += result.len;
  decodedValue = baAsn1.decodeCharacterString(
    buffer,
    offset + len,
    apduLen - (offset + len),
    result.value
  );
  len += decodedValue.len;
  value.objectName = decodedValue.value;
  value.len = len;
  return value;
};
