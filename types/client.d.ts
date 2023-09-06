export = Client;
/**
 * To be able to communicate to BACNET devices, you have to initialize a new bacnet instance.
 * @class bacnet
 * @param {object=} this._settings - The options object used for parameterizing the bacnet.
 * @param {number=} [options.port=47808] - BACNET communication port for listening and sending.
 * @param {string=} options.interface - Specific BACNET communication interface if different from primary one.
 * @param {string=} [options.broadcastAddress=255.255.255.255] - The address used for broadcast messages.
 * @param {number=} [options.apduTimeout=3000] - The timeout in milliseconds until a transaction should be interpreted as error.
 * @example
 * const bacnet = require('node-bacnet');
 *
 * const client = new bacnet({
 *   port: 47809,                          // Use BAC1 as communication port
 *   interface: '192.168.251.10',          // Listen on a specific interface
 *   broadcastAddress: '192.168.251.255',  // Use the subnet broadcast address
 *   apduTimeout: 6000                     // Wait twice as long for response
 * });
 */


interface ClientOptions {
  port?: number;
  interface?: string;
  transport?: any;
  broadcastAddress?: string;
  apduTimeout?: number;
  reuseAddr?: boolean;
}
declare class Client extends EventEmitter {
  /**
   * Helper function to take an array of enums and produce a bitstring suitable
   * for inclusion as a property.
   *
   * @example
   * [bacnet.enum.PropertyIdentifier.PROTOCOL_OBJECT_TYPES_SUPPORTED]: [
   *   {value: bacnet.createBitstring([
   *     bacnet.enum.ObjectTypesSupported.ANALOG_INPUT,
   *     bacnet.enum.ObjectTypesSupported.ANALOG_OUTPUT,
   *   ]),
   *   type: bacnet.enum.ApplicationTag.BIT_STRING},
   * ],
   */
  static createBitstring(items: any): {
    value: number[];
    bitsUsed: number;
  };
  /**
   *
   * @param options
   */
  constructor(options?: ClientOptions);
  _invokeCounter: number;
  _invokeStore: {};
  _lastSequenceNumber: number;
  _segmentStore: any[];
  _settings: {
    port: any;
    interface: any;
    transport: any;
    broadcastAddress: any;
    apduTimeout: any;
  };
  _transport: any;
  /**
   *
   * @returns {number}
   * @private
   */
  private _getInvokeId;
  /**
   *
   * @param id
   * @param err
   * @param result
   * @returns {*}
   * @private
   */
  private _invokeCallback;
  /**
   *
   * @param id
   * @param callback
   * @private
   */
  private _addCallback;
  /**
   *
   * @param isForwarded
   * @returns {{offset: (number), buffer: *}}
   * @private
   */
  private _getBuffer;
  /**
   *
   * @param invokeId
   * @param buffer
   * @param offset
   * @param length
   * @returns {*}
   * @private
   */
  private _processError;
  /**
   *
   * @param invokeId
   * @param reason
   * @private
   */
  private _processAbort;
  /**
   *
   * @param receiver
   * @param negative
   * @param server
   * @param originalInvokeId
   * @param sequencenumber
   * @param actualWindowSize
   * @private
   */
  private _segmentAckResponse;
  /**
   *
   * @param msg
   * @param first
   * @param moreFollows
   * @param buffer
   * @param offset
   * @param length
   * @private
   */
  private _performDefaultSegmentHandling;
  /**
   *
   * @param msg
   * @param server
   * @param buffer
   * @param offset
   * @param length
   * @private
   */
  private _processSegment;
  /**
   *
   * @param serviceMap
   * @param content
   * @param buffer
   * @param offset
   * @param length
   * @returns {*}
   * @private
   */
  private _processServiceRequest;
  /**
   *
   * @param buffer
   * @param offset
   * @param length
   * @param header
   * @private
   */
  private _handlePdu;
  /**
   *
   * @param buffer
   * @param offset
   * @param msgLength
   * @param header
   * @returns {*}
   * @private
   */
  private _handleNpdu;
  /**
   *
   * @param buffer
   * @param remoteAddress
   * @returns {*}
   * @private
   */
  private _receiveData;
  /**
   * @event bacnet.error
   * @param {error} err - The error object thrown by the underlying transport layer.
   * @example
   * const bacnet = require('node-bacnet');
   * const client = new bacnet();
   *
   * client.on('error', (err) => {
   *   console.log('Error occurred: ', err);
   *   client.close();
   * });
   */
  _receiveError(err: Error): void;
  /**
   * The whoIs command discovers all BACNET devices in a network.
   * @function bacnet.whoIs
   * @param {string} receiver - IP address of the target device.
   * @param {object=} options
   * @param {number=} options.lowLimit - Minimal device instance number to search for.
   * @param {number=} options.highLimit - Maximal device instance number to search for.
   * @fires bacnet.iAm
   * @example
   * const bacnet = require('node-bacnet');
   * const client = new bacnet();
   *
   * client.whoIs();
   */
  whoIs(receiver: string, options?: object | undefined): void;
  /**
   * The timeSync command sets the time of a target device.
   * @function bacnet.timeSync
   * @param {string} receiver - IP address of the target device.
   * @param {date} dateTime - The date and time to set on the target device.
   * @example
   * const bacnet = require('node-bacnet');
   * const client = new bacnet();
   *
   * client.timeSync('192.168.1.43', new Date());
   */
  timeSync(receiver: string, dateTime: Date): void;
  /**
   * The timeSyncUTC command sets the UTC time of a target device.
   * @function bacnet.timeSyncUTC
   * @param {string} receiver - IP address of the target device.
   * @param {date} dateTime - The date and time to set on the target device.
   * @example
   * const bacnet = require('node-bacnet');
   * const client = new bacnet();
   *
   * client.timeSyncUTC('192.168.1.43', new Date());
   */
  timeSyncUTC(receiver: string, dateTime: Date): void;
  /**
   * The readProperty command reads a single property of an object from a device.
   * @function bacnet.readProperty
   * @param {string} receiver - IP address of the target device.
   * @param {object} objectId - The BACNET object ID to read.
   * @param {number} objectId.type - The BACNET object type to read.
   * @param {number} objectId.instance - The BACNET object instance to read.
   * @param {number} propertyId - The BACNET property id in the specified object to read.
   * @param {object=} options
   * @param {MaxSegmentsAccepted=} options.maxSegments - The maximimal allowed number of segments.
   * @param {MaxApduLengthAccepted=} options.maxApdu - The maximal allowed APDU size.
   * @param {number=} options.invokeId - The invoke ID of the confirmed service telegram.
   * @param {number=} options.arrayIndex - The array index of the property to be read.
   * @param {function} next - The callback containing an error, in case of a failure and value object in case of success.
   * @example
   * const bacnet = require('node-bacnet');
   * const client = new bacnet();
   *
   * client.readProperty('192.168.1.43', {type: 8, instance: 44301}, 28, (err, value) => {
   *   console.log('value: ', value);
   * });
   */
  readProperty(
    receiver: string,
    objectId: {
      type: number;
      instance: number;
    },
    propertyId: number,
    options: object | undefined,
    next: Function
  ): void;
  /**
   * The writeProperty command writes a single property of an object to a device.
   * @function bacnet.writeProperty
   * @param {string} receiver - IP address of the target device.
   * @param {object} objectId - The BACNET object ID to write.
   * @param {number} objectId.type - The BACNET object type to write.
   * @param {number} objectId.instance - The BACNET object instance to write.
   * @param {number} propertyId - The BACNET property id in the specified object to write.
   * @param {object[]} values - A list of values to be written to the specified property.
   * @param {ApplicationTag} values.type - The data-type of the value to be written.
   * @param {number} values.value - The actual value to be written.
   * @param {object=} options
   * @param {MaxSegmentsAccepted=} options.maxSegments - The maximimal allowed number of segments.
   * @param {MaxApduLengthAccepted=} options.maxApdu - The maximal allowed APDU size.
   * @param {number=} options.invokeId - The invoke ID of the confirmed service telegram.
   * @param {number=} options.arrayIndex - The array index of the property to be read.
   * @param {number=} options.priority - The priority of the value to be written.
   * @param {function} next - The callback containing an error, in case of a failure and value object in case of success.
   * @example
   * const bacnet = require('node-bacnet');
   * const client = new bacnet();
   *
   * client.writeProperty('192.168.1.43', {type: 8, instance: 44301}, 28, [
   *   {type: bacnet.enum.ApplicationTag.REAL, value: 100}
   * ], (err, value) => {
   *   console.log('value: ', value);
   * });
   */
  writeProperty(
    receiver: string,
    objectId: {
      type: number;
      instance: number;
    },
    propertyId: number,
    values: {
      type: ApplicationTag;
      value: number;
    },
    options: object | undefined,
    next: Function
  ): void;
  /**
   * The readPropertyMultiple command reads multiple properties in multiple objects from a device.
   * @function bacnet.readPropertyMultiple
   * @param {string} receiver - IP address of the target device.
   * @param {object[]} propertiesArray - List of object and property specifications to be read.
   * @param {object} propertiesArray.objectId - Specifies which object to read.
   * @param {number} propertiesArray.objectId.type - The BACNET object type to read.
   * @param {number} propertiesArray.objectId.instance - The BACNET object instance to read.
   * @param {object[]} propertiesArray.properties - List of properties to be read.
   * @param {number} propertiesArray.properties.id - The BACNET property id in the specified object to read. Also supports 8 for all properties.
   * @param {object=} options
   * @param {MaxSegmentsAccepted=} options.maxSegments - The maximimal allowed number of segments.
   * @param {MaxApduLengthAccepted=} options.maxApdu - The maximal allowed APDU size.
   * @param {number=} options.invokeId - The invoke ID of the confirmed service telegram.
   * @param {function} next - The callback containing an error, in case of a failure and value object in case of success.
   * @example
   * const bacnet = require('node-bacnet');
   * const client = new bacnet();
   *
   * const requestArray = [
   *   {objectId: {type: 8, instance: 4194303}, properties: [{id: 8}]}
   * ];
   * client.readPropertyMultiple('192.168.1.43', requestArray, (err, value) => {
   *   console.log('value: ', value);
   * });
   */
  readPropertyMultiple(
    receiver: string,
    propertiesArray: {
      objectId: {
        type: number;
        instance: number;
      };
      properties: {
        id: number;
      };
    },
    options: object | undefined,
    next: Function
  ): void;
  /**
   * The writePropertyMultiple command writes multiple properties in multiple objects to a device.
   * @function bacnet.writePropertyMultiple
   * @param {string} receiver - IP address of the target device.
   * @param {object[]} values - List of object and property specifications to be written.
   * @param {object} values.objectId - Specifies which object to read.
   * @param {number} values.objectId.type - The BACNET object type to read.
   * @param {number} values.objectId.instance - The BACNET object instance to read.
   * @param {object[]} values.values - List of properties to be written.
   * @param {object} values.values.property - Property specifications to be written.
   * @param {number} values.values.property.id - The BACNET property id in the specified object to write.
   * @param {number} values.values.property.index - The array index of the property to be written.
   * @param {object[]} values.values.value - A list of values to be written to the specified property.
   * @param {ApplicationTag} values.values.value.type - The data-type of the value to be written.
   * @param {object} values.values.value.value - The actual value to be written.
   * @param {number} values.values.priority - The priority to be used for writing to the property.
   * @param {object=} options
   * @param {MaxSegmentsAccepted=} options.maxSegments - The maximimal allowed number of segments.
   * @param {MaxApduLengthAccepted=} options.maxApdu - The maximal allowed APDU size.
   * @param {number=} options.invokeId - The invoke ID of the confirmed service telegram.
   * @param {function} next - The callback containing an error, in case of a failure and value object in case of success.
   * @example
   * const bacnet = require('node-bacnet');
   * const client = new bacnet();
   *
   * const values = [
   *   {objectId: {type: 8, instance: 44301}, values: [
   *     {property: {id: 28, index: 12}, value: [{type: bacnet.enum.ApplicationTag.BOOLEAN, value: true}], priority: 8}
   *   ]}
   * ];
   * client.writePropertyMultiple('192.168.1.43', values, (err, value) => {
   *   console.log('value: ', value);
   * });
   */
  writePropertyMultiple(
    receiver: string,
    values: {
      objectId: {
        type: number;
        instance: number;
      };
      values: () => IterableIterator<{
        objectId: {
          type: number;
          instance: number;
        };
        values: {
          property: {
            id: number;
            index: number;
          };
          value: {
            type: ApplicationTag;
            value: object;
          };
          priority: number;
        };
      }>;
    },
    options: object | undefined,
    next: Function
  ): void;
  /**
   * The confirmedCOVNotification command is used to push notifications to other
   * systems that have registered with us via a subscribeCOV message.
   * @function bacnet.confirmedCOVNotification
   * @param {string} receiver - IP address of the target device.
   * @param {object} monitoredObject - The object being monitored, from subscribeCOV.
   * @param {number} monitoredObject.type - Object type.
   * @param {number} monitoredObject.instance - Object instance.
   * @param {number} subscribeId - Subscriber ID from subscribeCOV,
   * @param {number} initiatingDeviceId - Our BACnet device ID.
   * @param {number} lifetime - Number of seconds left until the subscription expires.
   * @param {array} values - values for the monitored object.  See example.
   * @param {object=} options
   * @param {MaxSegmentsAccepted=} options.maxSegments - The maximimal allowed number of segments.
   * @param {MaxApduLengthAccepted=} options.maxApdu - The maximal allowed APDU size.
   * @param {number=} options.invokeId - The invoke ID of the confirmed service telegram.
   * @param {function} next - The callback containing an error, in case of a failure and value object in case of success.
   * @example
   * const bacnet = require('node-bacnet');
   * const client = new bacnet();
   *
   * const settings = {deviceId: 123}; // our BACnet device
   *
   * // Items saved from subscribeCOV message
   * const monitoredObject = {type: 1, instance: 1};
   * const subscriberProcessId = 123;
   *
   * client.confirmedCOVNotification(
   *   '192.168.1.43',
   *   monitoredObject,
   *   subscriberProcessId,
   *   settings.deviceId,
   *   30, // should be lifetime of subscription really
   *   [
   *     {
   *       property: { id: bacnet.enum.PropertyIdentifier.PRESENT_VALUE },
   *       value: [
   *         {value: 123, type: bacnet.enum.ApplicationTag.REAL},
   *       ],
   *     },
   *   ],
   *   (err) => {
   *     console.log('error: ', err);
   *   }
   * );
   */
  confirmedCOVNotification(
    receiver: string,
    monitoredObject: {
      type: number;
      instance: number;
    },
    subscribeId: number,
    initiatingDeviceId: number,
    lifetime: number,
    values: any[],
    options: object | undefined,
    next: Function
  ): void;
  /**
   * The deviceCommunicationControl command enables or disables network communication of the target device.
   * @function bacnet.deviceCommunicationControl
   * @param {string} receiver - IP address of the target device.
   * @param {number} timeDuration - The time to hold the network communication state in seconds. 0 for infinite.
   * @param {EnableDisable} enableDisable - The network communication state to set.
   * @param {object=} options
   * @param {MaxSegmentsAccepted=} options.maxSegments - The maximimal allowed number of segments.
   * @param {MaxApduLengthAccepted=} options.maxApdu - The maximal allowed APDU size.
   * @param {number=} options.invokeId - The invoke ID of the confirmed service telegram.
   * @param {string=} options.password - The optional password used to set the network communication state.
   * @param {function} next - The callback containing an error, in case of a failure and value object in case of success.
   * @example
   * const bacnet = require('node-bacnet');
   * const client = new bacnet();
   *
   * client.deviceCommunicationControl('192.168.1.43', 0, bacnet.enum.EnableDisable.DISABLE, (err) => {
   *   console.log('error: ', err);
   * });
   */
  deviceCommunicationControl(
    receiver: string,
    timeDuration: number,
    enableDisable: EnableDisable,
    options: object | undefined,
    next: Function
  ): void;
  /**
   * The reinitializeDevice command initiates a restart of the target device.
   * @function bacnet.reinitializeDevice
   * @param {string} receiver - IP address of the target device.
   * @param {ReinitializedState} state - The type of restart to be initiated.
   * @param {object=} options
   * @param {MaxSegmentsAccepted=} options.maxSegments - The maximimal allowed number of segments.
   * @param {MaxApduLengthAccepted=} options.maxApdu - The maximal allowed APDU size.
   * @param {number=} options.invokeId - The invoke ID of the confirmed service telegram.
   * @param {string=} options.password - The optional password used to restart the device.
   * @param {function} next - The callback containing an error, in case of a failure and value object in case of success.
   * @example
   * const bacnet = require('node-bacnet');
   * const client = new bacnet();
   *
   * client.reinitializeDevice('192.168.1.43', bacnet.enum.ReinitializedState.COLDSTART, (err, value) => {
   *   console.log('value: ', value);
   * });
   */
  reinitializeDevice(
    receiver: string,
    state: ReinitializedState,
    options: object | undefined,
    next: Function
  ): void;
  /**
   *
   * @param receiver
   * @param objectId
   * @param position
   * @param fileBuffer
   * @param options
   * @param next
   */
  writeFile(
    receiver: string,
    objectId: any,
    position: any,
    filebuffer: Buffer,
    options: any,
    next: any
  ): void;
  /**
   *
   * @param receiver
   * @param objectId
   * @param position
   * @param count
   * @param options
   * @param next
   */
  readFile(
    receiver: string,
    objectId: any,
    position: any,
    count: any,
    options: any,
    next: any
  ): void;
  /**
   *
   * @param receiver
   * @param objectId
   * @param idxBegin
   * @param quantity
   * @param options
   * @param next
   */
  readRange(
    receiver: string,
    objectId: any,
    idxBegin: any,
    quantity: any,
    options: any,
    next: any
  ): void;
  /**
   *
   * @param receiver
   * @param objectId
   * @param subscribeId
   * @param cancel
   * @param issueConfirmedNotifications
   * @param lifetime
   * @param options
   * @param next
   */
  subscribeCov(
    receiver: string,
    objectId: any,
    subscribeId: any,
    cancel: any,
    issueConfirmedNotifications: any,
    lifetime: any,
    options: any,
    next: any
  ): void;
  /**
   *
   * @param receiver
   * @param objectId
   * @param monitoredProperty
   * @param subscribeId
   * @param cancel
   * @param issueConfirmedNotifications
   * @param options
   * @param next
   */
  subscribeProperty(
    receiver: string,
    objectId: any,
    monitoredProperty: any,
    subscribeId: any,
    cancel: any,
    issueConfirmedNotifications: any,
    options: any,
    next: any
  ): void;
  /**
   * The unconfirmedCOVNotification command sends an unconfirmed COV notification to a device
   * @function bacnet.unconfirmedCOVNotification
   * @param {string} receiver - IP address of the target device.
   * @param {number} subscriberProcessId - The process id which was used by a target device in the subscription.
   * @param {number} initiatingDeviceId - The id of this device.
   * @param {object} monitoredObjectId - Specifies about which object the notification is.
   * @param {number} monitoredObjectId.type - The BACNET object type of the notification.
   * @param {number} monitoredObjectId.instance - The BACNET object instance of the notification.
   * @param {number} timeRemaining - How long the subscription is still active in seconds.
   * @param {object[]} values - List of properties with updated values.
   * @param {object} values.property - Property specifications.
   * @param {number} values.property.id - The updated BACNET property id.
   * @param {number} values.property.index - The array index of the updated property.
   * @param {object[]} values.value - A list of updated values.
   * @param {ApplicationTag} values.value.type - The data-type of the updated value.
   * @param {object} values.value.value - The actual updated value.
   * @param {number} values.priority - The priority of the updated property.
   * @example
   * const bacnet = require('node-bacnet');
   * const client = new bacnet();
   *
   * client.unconfirmedCOVNotification(
   *            '127.0.0.1',
   *            3,
   *            433,
   *            {type: 2, instance: 122},
   *            120,
   *            [
   *              {
   *                property: {id: 85},
   *                value: [{type: baEnum.ApplicationTag.REAL, value: 12.3}]
   *              },
   *              {
   *                property: {id: 111},
   *                value: [{type: baEnum.ApplicationTag.BIT_STRING, value: 0xFFFF}]
   *              }
   *            ]);
   */
  unconfirmedCOVNotification(
    receiver: string,
    subscriberProcessId: number,
    initiatingDeviceId: number,
    monitoredObjectId: {
      type: number;
      instance: number;
    },
    timeRemaining: number,
    values: {
      property: {
        id: number;
        index: number;
      };
      value: {
        type: ApplicationTag;
        value: object;
      };
      priority: number;
    }
  ): void;
  /**
   *
   * @param receiver
   * @param objectId
   * @param values
   * @param options
   * @param next
   */
  createObject(
    receiver: string,
    objectId: any,
    values: any,
    options: any,
    next: any
  ): void;
  /**
   *
   * @param receiver
   * @param objectId
   * @param options
   * @param next
   */
  deleteObject(receiver: string, objectId: any, options: any, next: any): void;
  /**
   *
   * @param receiver
   * @param objectId
   * @param reference
   * @param values
   * @param options
   * @param next
   */
  removeListElement(
    receiver: string,
    objectId: any,
    reference: any,
    values: any,
    options: any,
    next: any
  ): void;
  /**
   *
   * @param receiver
   * @param objectId
   * @param reference
   * @param values
   * @param options
   * @param next
   */
  addListElement(
    receiver: string,
    objectId: any,
    reference: any,
    values: any,
    options: any,
    next: any
  ): void;
  /**
   *
   * @param receiver
   * @param options
   * @param next
   */
  getAlarmSummary(receiver: string, options: any, next: any): void;
  /**
   *
   * @param receiver
   * @param objectId
   * @param options
   * @param next
   */
  getEventInformation(
    receiver: string,
    objectId: any,
    options: any,
    next: any
  ): void;
  /**
   *
   * @param receiver
   * @param objectId
   * @param eventState
   * @param ackText
   * @param evTimeStamp
   * @param ackTimeStamp
   * @param options
   * @param next
   */
  acknowledgeAlarm(
    receiver: string,
    objectId: any,
    eventState: any,
    ackText: any,
    evTimeStamp: any,
    ackTimeStamp: any,
    options: any,
    next: any
  ): void;
  /**
   *
   * @param receiver
   * @param vendorId
   * @param serviceNumber
   * @param data
   * @param options
   * @param next
   */
  confirmedPrivateTransfer(
    receiver: string,
    vendorId: any,
    serviceNumber: any,
    data: any,
    options: any,
    next: any
  ): void;
  /**
   *
   * @param receiver
   * @param vendorId
   * @param serviceNumber
   * @param data
   */
  unconfirmedPrivateTransfer(
    receiver: string,
    vendorId: any,
    serviceNumber: any,
    data: any
  ): void;
  /**
   *
   * @param receiver
   * @param acknowledgmentFilter
   * @param options
   * @param next
   */
  getEnrollmentSummary(
    receiver: string,
    acknowledgmentFilter: any,
    options: any,
    next: any
  ): void;
  /**
   *
   * @param receiver
   * @param eventNotification
   */
  unconfirmedEventNotification(receiver: string, eventNotification: any): void;
  /**
   *
   * @param receiver
   * @param eventNotification
   * @param options
   * @param next
   */
  confirmedEventNotification(
    receiver: string,
    eventNotification: any,
    options: any,
    next: any
  ): void;
  /**
   * The readPropertyResponse call sends a response with information about one of our properties.
   * @function bacnet.readPropertyResponse
   * @param {string} receiver - IP address of the target device.
   * @param {number} invokeId - ID of the original readProperty request.
   * @param {object} objectId - objectId from the original request,
   * @param {object} property - property being read, taken from the original request.
   * @param {object=} options varying behaviour for special circumstances
   * @param {string=} options.forwardedFrom - If functioning as a BBMD, the IP address this message originally came from.
   */
  readPropertyResponse(
    receiver: string,
    invokeId: number,
    objectId: object,
    property: object,
    value: any,
    options?: object | undefined
  ): void;
  readPropertyMultipleResponse(
    receiver: string,
    invokeId: any,
    values: any
  ): void;
  /**
   * The iAmResponse command is sent as a reply to a whoIs request.
   * @function bacnet.iAmResponse
   * @param {object} receiver - address to send packet to, null for local broadcast.
   * @param {number} deviceId - Our device ID.
   * @param {number} segmentation - an enum.Segmentation value.
   * @param {number} vendorId - The numeric ID assigned to the organisation providing this application.
   */
  iAmResponse(
    receiver: object,
    deviceId: number,
    segmentation: number,
    vendorId: number
  ): void;
  /**
   *
   * @param receiver
   * @param deviceId
   * @param objectId
   * @param objectName
   */
  iHaveResponse(
    receiver: string,
    deviceId: any,
    objectId: any,
    objectName: any
  ): void;
  /**
   *
   * @param receiver
   * @param service
   * @param invokeId
   */
  simpleAckResponse(receiver: string, service: any, invokeId: any): void;
  /**
   *
   * @param receiver
   * @param service
   * @param invokeId
   * @param errorClass
   * @param errorCode
   */
  errorResponse(
    receiver: string,
    service: any,
    invokeId: any,
    errorClass: any,
    errorCode: any
  ): void;
  /**
   *
   * @param receiver
   * @param buffer
   */
  sendBvlc(receiver: string, buffer: Buffer): void;
  /**
   * The resultResponse is a BVLC-Result message used to respond to certain events, such as BBMD registration.
   * This message cannot be wrapped for passing through a BBMD, as it is used as a BBMD control message.
   * @function bacnet.resultResponse
   * @param {string} receiver - IP address of the target device.
   * @param {number} resultCode - Single value from BvlcResultFormat enum.
   */
  resultResponse(receiver: string, resultCode: number): void;
  /**
   * Unloads the current bacnet instance and closes the underlying UDP socket.
   * @function bacnet.close
   * @example
   * const bacnet = require('node-bacnet');
   * const client = new bacnet();
   *
   * client.close();
   */
  close(): void;
}
import EventEmitter_1 = require("events");
import EventEmitter = EventEmitter_1.EventEmitter;
import { ApplicationTag, EnableDisable, ReinitializedState } from "../lib/enum";

