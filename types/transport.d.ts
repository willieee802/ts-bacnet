/// <reference types="node" />
/// <reference types="node" />
export = Transport;
declare class Transport extends EventEmitter {
    constructor(settings: any);
    _lastSendMessages: {};
    _settings: any;
    _server: import("dgram").Socket;
    ownAddress: import("net").AddressInfo;
    getBroadcastAddress(): any;
    getMaxPayload(): number;
    send(buffer: any, offset: any, receiver: any): void;
    open(): void;
    close(): void;
}
import EventEmitter_1 = require("events");
import EventEmitter = EventEmitter_1.EventEmitter;
