export function encode(buffer: any, alarms: any): void;
export function decode(
  buffer: any,
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
