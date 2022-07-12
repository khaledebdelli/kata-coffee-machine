const drinkMaker = require("./index");
const commands = require("./commands");

describe("Turn order into string instructions", () => {
  test("Should return C:1:0 when order is coffee with one sugar", () => {
    const instructions = drinkMaker(commands.COFFEE, 1);
    expect(instructions).toBe("C:1:0");
  });

  test("Should return T:1:0 when order is tea with one sugar", () => {
    const instructions = drinkMaker(commands.TEA, 1);
    expect(instructions).toBe("T:1:0");
  });

  test("Should return H:2:0 when order is chocolate with two sugars", () => {
    const instructions = drinkMaker(commands.CHOCOLATE, 2);
    expect(instructions).toBe("H:2:0");
  });

  test("Should return H:: when order is chocolate with no sugar (no stick)", () => {
    const instructions = drinkMaker(commands.CHOCOLATE, 0);
    expect(instructions).toBe("H::");
  });
});
