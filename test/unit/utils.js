const coreExports = {
  debug: require("debug")("bacnet:test:unit:debug"),
  trace: require("debug")("bacnet:test:unit:trace"),
  bacnetClient: require("../../"),
};

module.exports = coreExports;

export const getBuffer = () => {
  return {
    buffer: Buffer.alloc(1482),
    offset: 0,
  };
};
