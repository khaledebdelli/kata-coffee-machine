const commands = require("./commands");
const prices = require("./prices");

const drinkMaker = function (drink, sugars) {
  if (sugars === 0) {
    return drink + "::";
  }
  return drink + ":" + sugars + ":0";
};

const payMoney = function (drink, money) {
  if ((drink === commands.COFFEE && money >= prices.COFFEE_PRICE) || (drink === commands.TEA && money >= prices.TEA_PRICE) || 
  (drink === commands.CHOCOLATE && money >= prices.CHOCOLATE_PRICE))
    return "accepted";

  if (drink === commands.COFFEE) return prices.COFFEE_PRICE - money + "money missing";
  if (drink === commands.TEA) return prices.TEA_PRICE - money + "money missing";
  if (drink === commands.CHOCOLATE) return prices.CHOCOLATE_PRICE - money + "money missing";
};

module.exports = {
    drinkMaker,
    payMoney,
}