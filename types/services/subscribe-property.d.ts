export function encode(
  buffer: Buffer,
  subscriberProcessId: any,
  monitoredObjectId: any,
  cancellationRequest: any,
  issueConfirmedNotifications: any,
  lifetime: any,
  monitoredProperty: any,
  covIncrementPresent: any,
  covIncrement: any
): void;
export function decode(
  buffer: Buffer,
  offset: any
): {
  subscriberProcessId: any;
  monitoredObjectId: {
    type: number;
    instance: number;
  };
  cancellationRequest: boolean;
  issueConfirmedNotifications: boolean;
  lifetime: any;
  monitoredProperty: {
    id: any;
    index: any;
  };
  covIncrement: any;
  len: number;
};
