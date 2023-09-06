import * as baAsn1 from "../asn1";
import * as baEnum from "../enum";

export const encode = (buffer, ttl, length = 2) => {
  baAsn1.encodeUnsigned(buffer, ttl, length);
};

export const decode = (buffer, offset, length = 2) => {
  let len = 0;
  let result = baAsn1.decodeUnsigned(buffer, offset + len, length);
  len += result.len;
  return {
    len,
    ttl: result.value,
  };
};
