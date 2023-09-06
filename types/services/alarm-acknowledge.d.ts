export function encode(buffer: any, ackProcessId: any, eventObjectId: any, eventStateAcknowledged: any, ackSource: any, eventTimeStamp: any, ackTimeStamp: any): void;
export function decode(buffer: any, offset: any, apduLen: any): {
    acknowledgedProcessId: any;
    eventObjectId: {
        type: number;
        instance: number;
    };
    eventStateAcknowledged: any;
    eventTimeStamp: any;
    acknowledgeSource: string;
    acknowledgeTimeStamp: any;
    len: number;
};
