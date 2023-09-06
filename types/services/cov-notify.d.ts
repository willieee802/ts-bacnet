export function encode(
  buffer: Buffer,
  subscriberProcessId: any,
  initiatingDeviceId: any,
  monitoredObjectId: any,
  timeRemaining: any,
  values: any
): void;
export function decode(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  len: number;
  subscriberProcessId: any;
  initiatingDeviceId: {
    type: number;
    instance: number;
  };
  monitoredObjectId: {
    type: number;
    instance: number;
  };
  timeRemaining: any;
  values: {
    property: {};
    value: any[];
  }[];
};
