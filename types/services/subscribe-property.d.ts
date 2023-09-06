export function encode(buffer: any, subscriberProcessId: any, monitoredObjectId: any, cancellationRequest: any, issueConfirmedNotifications: any, lifetime: any, monitoredProperty: any, covIncrementPresent: any, covIncrement: any): void;
export function decode(buffer: any, offset: any): {
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
