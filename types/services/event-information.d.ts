export function encode(buffer: any, events: any, moreEvents: any): void;
export function decode(buffer: any, offset: any, apduLen: any): {
    len: number;
    alarms: {
        objectId: {
            type: number;
            instance: number;
        };
        eventState: any;
        acknowledgedTransitions: {
            value: any[];
        };
        eventTimeStamps: any[];
        notifyType: any;
        eventEnable: {
            value: any[];
        };
        eventPriorities: any[];
    }[];
    moreEvents: boolean;
};
