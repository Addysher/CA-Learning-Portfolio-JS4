const assert = require("assert");

const rooster = require("../index");

describe("rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      const expected = "cock-a-doodle-doo!";
      const actual = rooster.announceDawn();
      assert.equal(actual, expected);
    });
  });
});

describe("rooster", () => {
  describe(".timeAtDawn", () => {
    it("returns its argument as a string", () => {
      const hour = 3;
      const expected = `${hour}`;
      const actual = rooster.timeAtDawn(hour);
      assert.strictEqual(actual, expected);
    });
    it("throws an error if passed a number less than 0", () => {
      const hour = -1;

      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, RangeError);
    });
    it("throws an error if passed a number greater than 23", () => {
      const hour = 24;
      
      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, RangeError);
    });
  });
});
