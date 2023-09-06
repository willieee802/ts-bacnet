declare module "@verticgreens/bacnet" {
  export const apdu: typeof import("./apdu");
  export const asn1: typeof import("./asn1");
  export const bvlc: typeof import("./bvlc");
  export const client: typeof import("./client");
  export const enums: typeof import("./enum");
  export const npdu: typeof import("./npdu");
  export const transport: typeof import("./transport");
}
