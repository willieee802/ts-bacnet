import Bacnet, { enums } from "./dist";
import { ApplicationTag } from "./lib/enum";
import { BacnetObjectIdentity } from "./lib/types";

const bacnetClient = new Bacnet({
  port: 47809,
});

bacnetClient.on("message", (msg) => {
  console.log(msg);
});
bacnetClient.on("error", (err) => {
  console.log(err);
});

bacnetClient.on("iAm", (msg) => {
  console.log(msg);
});

bacnetClient.on("whoIs", (msg) => {
  console.log(msg);
});

bacnetClient.on("listening", (msg) => {
  console.log(msg);
});

bacnetClient.on("", (msg) => {
  console.log(msg);
});

const address = "10.1.40.34" as string;
// bacnetClient.whoIs(address);

// readProperty
const identity: BacnetObjectIdentity = {
  //@ts-ignore
  type: enums.ObjectType.ANALOG_VALUE,
  //@ts-ignore
  instance: 83,
};

const Value = 2200;
const TestValue = 2201;
const ValueType = ApplicationTag.REAL;

bacnetClient.readPropertyMultiple(
  address,
  [
    {
      objectId: identity,
      properties: [
        {
          id: enums.PropertyIdentifier.PRESENT_VALUE,
        },
        {
          id: enums.PropertyIdentifier.DESCRIPTION,
        },
        {
          id: enums.PropertyIdentifier.UNITS,
        },
      ],
    },
  ],
  {},
  (err, value) => {
    if (err) {
      console.log(err);
    }
    if (!value) throw new Error("No value");
    const valueObj = value.values[0].values[0].value[0].value;
    console.log({ valueObj });
  }
);

bacnetClient.writeProperty(
  address,
  identity,
  enums.PropertyIdentifier.PRESENT_VALUE,
  [
    {
      type: ValueType,
      value: TestValue,
    },
  ],
  {},
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

bacnetClient.readPropertyMultiple(
  address,
  [
    {
      objectId: identity,
      properties: [
        {
          id: enums.PropertyIdentifier.PRESENT_VALUE,
        },
        {
          id: enums.PropertyIdentifier.DESCRIPTION,
        },
        {
          id: enums.PropertyIdentifier.UNITS,
        },
      ],
    },
  ],
  {},
  (err, value) => {
    if (err) {
      console.log(err);
    }
    if (!value) throw new Error("No value");
    const valueObj = value.values[0].values[0].value[0].value;
    console.log({ valueObj });
  }
);

bacnetClient.writeProperty(
  address,
  identity,
  enums.PropertyIdentifier.PRESENT_VALUE,
  [
    {
      type: ValueType,
      value: Value,
    },
  ],
  {},
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

bacnetClient.readPropertyMultiple(
  address,
  [
    {
      objectId: identity,
      properties: [
        {
          id: enums.PropertyIdentifier.PRESENT_VALUE,
        },
        {
          id: enums.PropertyIdentifier.DESCRIPTION,
        },
        {
          id: enums.PropertyIdentifier.UNITS,
        },
      ],
    },
  ],
  {},
  (err, value) => {
    if (err) {
      console.log(err);
    }
    if (!value) throw new Error("No value");
    const valueObj = value.values[0].values[0].value[0].value;
    console.log({ valueObj });
  }
);
