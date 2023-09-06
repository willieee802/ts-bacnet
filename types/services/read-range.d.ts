export function encode(buffer: any, objectId: any, propertyId: any, arrayIndex: any, requestType: any, position: any, time: any, count: any): void;
export function decode(buffer: any, offset: any, apduLen: any): {
    len: number;
    objectId: {
        type: number;
        instance: number;
    };
    property: {
        id: any;
        index: any;
    };
    requestType: number;
    position: any;
    time: Date;
    count: any;
};
export function encodeAcknowledge(buffer: any, objectId: any, propertyId: any, arrayIndex: any, resultFlags: any, itemCount: any, applicationData: any, requestType: any, firstSequence: any): void;
export function decodeAcknowledge(buffer: any, offset: any, apduLen: any): {
    objectId: {
        type: number;
        instance: number;
    };
    property: {
        index: 4294967295;
    };
    resultFlag: {
        value: any[];
    };
    itemCount: any;
    rangeBuffer: any;
    len: number;
};
