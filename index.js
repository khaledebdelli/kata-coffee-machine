const data = require("./data");

const drinkMaker = function () {
  let total = data.map( a => a.price).reduce( (x,y) => x+y, 0);
  let coffee = drinkQuantity(data,'C');
  let tea = drinkQuantity(data,'T');
  let chocolate = drinkQuantity(data,'H');
  let orange = drinkQuantity(data,'O');

  return coffee +' coffee and ' + tea +' tea and ' + chocolate +  ' chocolate and ' + orange + ' orange with a total of '+ total;
};

function drinkQuantity(data,drink) {
  return data.map(a=> a.drink).filter(a=>a===drink).length;
}

module.exports = {
  drinkMaker,
};
