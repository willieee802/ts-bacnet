export function encode(
  buffer: Buffer,
  ackProcessId: any,
  eventObjectId: any,
  eventStateAcknowledged: any,
  ackSource: any,
  eventTimeStamp: any,
  ackTimeStamp: any
): void;
export function decode(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  acknowledgedProcessId: any;
  eventObjectId: {
    type: number;
    instance: number;
  };
  eventStateAcknowledged: any;
  eventTimeStamp: any;
  acknowledgeSource: string;
  acknowledgeTimeStamp: any;
  len: number;
};
