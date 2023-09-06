export function encode(
  buffer: Buffer,
  acknowledgmentFilter: any,
  enrollmentFilter: any,
  eventStateFilter: any,
  eventTypeFilter: any,
  priorityFilter: any,
  notificationClassFilter: any
): void;
export function decode(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  acknowledgmentFilter: any;
  enrollmentFilter: {
    objectId: {
      type: number;
      instance: number;
    };
    processId: any;
  };
  eventStateFilter: any;
  eventTypeFilter: any;
  priorityFilter: {
    min: any;
    max: any;
  };
  notificationClassFilter: any;
  len: number;
};
export function encodeAcknowledge(
  buffer: Buffer,
  enrollmentSummaries: any
): void;
export function decodeAcknowledge(
  buffer: Buffer,
  offset: any,
  apduLen: any
): {
  enrollmentSummaries: {
    objectId: {
      type: number;
      instance: number;
    };
    eventType: any;
    eventState: any;
    priority: any;
    notificationClass: any;
  }[];
  len: number;
};
