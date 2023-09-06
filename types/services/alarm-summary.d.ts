export function encode(buffer: Buffer, alarms: any): void;
export function decode(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  len: number;
  alarms: {
    objectId: {
      type: number;
      instance: number;
    };
    alarmState: any;
    acknowledgedTransitions: {
      value: any[];
    };
  }[];
};
