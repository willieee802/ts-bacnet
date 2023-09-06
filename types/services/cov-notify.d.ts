export function encode(buffer: any, subscriberProcessId: any, initiatingDeviceId: any, monitoredObjectId: any, timeRemaining: any, values: any): void;
export function decode(buffer: any, offset: any, apduLen: any): {
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
