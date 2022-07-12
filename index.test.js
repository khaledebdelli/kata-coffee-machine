const { drinkMaker, payMoney } = require("./index");
const commands = require("./commands");
const prices = require("./prices");

describe("Turn order into string instructions", () => {
  test.skip("Should return C:1:0 when order is coffee with one sugar", () => {
    const instructions = drinkMaker(commands.COFFEE, 1);
    expect(instructions).toBe("C:1:0");
  });

  test.skip("Should return T:1:0 when order is tea with one sugar", () => {
    const instructions = drinkMaker(commands.TEA, 1);
    expect(instructions).toBe("T:1:0");
  });

  test.skip("Should return H:2:0 when order is chocolate with two sugars", () => {
    const instructions = drinkMaker(commands.CHOCOLATE, 2);
    expect(instructions).toBe("H:2:0");
  });

  test.skip("Should return H:: when order is chocolate with no sugar (no stick)", () => {
    const instructions = drinkMaker(commands.CHOCOLATE, 0);
    expect(instructions).toBe("H::");
  });
});

describe("Turn order into string instructions", () => {
  test("should return correct for coffee", () => {
    const instructions = payMoney(commands.COFFEE, 0.7);
    expect(instructions).toBe("accepted");
  });

  test("should return money missing for coffee", () => {
    const instructions = payMoney(commands.COFFEE, 0.5);
    expect(instructions).toBe(prices.COFFEE_PRICE - 0.5 + "money missing");
  });

  test("should return correct for tea", () => {
    const instructions = payMoney(commands.TEA, 0.5);
    expect(instructions).toBe("accepted");
  });

  test("should return money missing for tea", () => {
    const instructions = payMoney(commands.TEA, 0.3);
    expect(instructions).toBe(prices.TEA_PRICE - 0.3 + "money missing");
  });

  test("should return correct for CHCOLATE", () => {
    const instructions = payMoney(commands.CHOCOLATE, 0.5);
    expect(instructions).toBe("accepted");
  });

  test("should return money missing for CHOCOLATE", () => {
    const instructions = payMoney(commands.CHOCOLATE, 0.4);
    expect(instructions).toBe(prices.CHOCOLATE_PRICE - 0.4 + "money missing");
  });
});
