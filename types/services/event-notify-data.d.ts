export function encode(buffer: any, data: any): void;
export function decode(buffer: any, offset: any): {
    processId: any;
    initiatingObjectId: {
        type: number;
        instance: number;
    };
    eventObjectId: {
        type: number;
        instance: number;
    };
    timeStamp: {};
    notificationClass: any;
    priority: any;
    eventType: any;
    messageText: string;
    notifyType: any;
    ackRequired: boolean;
    fromState: any;
    toState: any;
    len: number;
};
