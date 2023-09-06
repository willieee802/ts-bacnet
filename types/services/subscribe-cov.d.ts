export function encode(
  buffer: Buffer,
  subscriberProcessId: any,
  monitoredObjectId: any,
  cancellationRequest: any,
  issueConfirmedNotifications: any,
  lifetime: any
): void;
export function decode(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  subscriberProcessId: any;
  monitoredObjectId: {
    type: number;
    instance: number;
  };
  cancellationRequest: boolean;
  issueConfirmedNotifications: boolean;
  lifetime: any;
  len: number;
};
