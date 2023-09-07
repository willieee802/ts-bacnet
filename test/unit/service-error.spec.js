const expect = require("chai").expect;
const utils = require("./utils");
const baServices = require("../../libjs/services");

describe("bacnet - Services layer Error unit", () => {
  it("should successfully encode and decode", () => {
    const buffer = utils.getBuffer();
    baServices.error.encode(buffer, 15, 25);
    const result = baServices.error.decode(buffer.buffer, 0);
    delete result.len;
    expect(result).to.deep.equal({
      class: 15,
      code: 25,
    });
  });
});
