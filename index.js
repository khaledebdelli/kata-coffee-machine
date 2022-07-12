const commands = require("./commands");
const prices = require("./prices");

const drinkMaker = function (drink, sugars, temperature) {
    let hot;
    if (drink === commands.ORANGE) return commands.ORANGE + '::';

    if (temperature === true) hot ='h'; else hot = '';

    if (sugars === 0) {
        return drink + hot + '::';
    }
    return drink + hot + ':' + sugars + ':0';
};

const payMoney = function (drink, money, sugars, temperature) {
  if (
    (drink === commands.COFFEE && money >= prices.COFFEE_PRICE) ||
    (drink === commands.TEA && money >= prices.TEA_PRICE) ||
    (drink === commands.CHOCOLATE && money >= prices.CHOCOLATE_PRICE) ||
    (drink === commands.ORANGE && money >= prices.ORANGE_PRICE)
  )
    return drinkMaker(drink, sugars, temperature);

  if (drink === commands.COFFEE) return prices.COFFEE_PRICE - money + "money missing";
  if (drink === commands.TEA) return prices.TEA_PRICE - money + "money missing";
  if (drink === commands.CHOCOLATE) return prices.CHOCOLATE_PRICE - money + "money missing";
  if (drink === commands.ORANGE) return prices.ORANGE_PRICE - money + "money missing";
};

module.exports = {
  drinkMaker,
  payMoney
};
