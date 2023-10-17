"use strict";
exports.__esModule = true;
var dist_1 = require("./dist");
// import  Bacnet from "./dist";
var node_bacnet_1 = require("./dist");
// var node_bacnet_1 = require("ts-bacnet");
console.log("starting 0");
var bacnetClient = new node_bacnet_1["default"]({ port: 47800 });
// var bacnetClient = new node_bacnet_1({ port: 47821 });
console.log("starting");
var hostName = "10.1.40.34";
bacnetClient.readProperty(
  hostName,
  { type: 0, instance: 32 },
  //@ts-ignore
  { id: dist_1.enums.PropertyIdentifier.DESCRIPTION },
  {},
  function (err, value) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Value: " + value);
  }
);


bacnetClient.
