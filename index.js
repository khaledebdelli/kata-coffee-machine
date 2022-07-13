const data = require("./data");
const resources = require("./resources");

const stock = {
  milk: 0.1,
  water: 0.1
};

const drinkMaker = function () {
  let total = data.map((a) => a.price).reduce((x, y) => x + y, 0);
  let coffee = drinkQuantity(data, "C");
  let tea = drinkQuantity(data, "T");
  let chocolate = drinkQuantity(data, "H");
  let orange = drinkQuantity(data, "O");

  if (!testShortage(coffee, "C") || !testShortage(tea, "T") || !testShortage(chocolate, "H") || !testShortage(orange, "O")) {
    return "shortage, a notification has been sent";
  }
  return coffee + " coffee and " + tea + " tea and " + chocolate + " chocolate and " + orange + " orange with a total of " + total;
};

function drinkQuantity(data, drink) {
  return data.map((a) => a.drink).filter((a) => a === drink).length;
}

function testShortage(quantity, drink) {
  const milk = resources.filter((a) => a.drink === drink)[0].ingredient.milk;
  const water = resources.filter((a) => a.drink === drink)[0].ingredient.water;
  console.log(drink);
  console.log(milk * quantity);
  console.log(water * quantity);
  if (milk * quantity > stock.milk || water * quantity > stock.water || stock.milk === 0 || stock.water === 0) {
    return false;
  }
  stock.milk = stock.milk - milk * quantity;
  stock.water = stock.water - water * quantity;
  return true;
}
module.exports = {
  drinkMaker
};
