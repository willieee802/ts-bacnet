export function encode(buffer: any, subscriberProcessId: any, monitoredObjectId: any, cancellationRequest: any, issueConfirmedNotifications: any, lifetime: any): void;
export function decode(buffer: any, offset: any, apduLen: any): {
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
