const { drinkMaker, payMoney } = require("./index");
const commands = require("./commands");
const prices = require("./prices");

describe('Turn order into string instructions', () => {

    test('should return correct for hot coffee with 2 sugars', () => {
        const instructions = payMoney(commands.COFFEE, 0.7, 2, true);
        expect(instructions).toBe('Ch:2:0');
    });

    test('should return correct for ORANGE', () => {
        const instructions = payMoney(commands.ORANGE, 0.7);
        expect(instructions).toBe('O::');
    });

    test('should return money missing for ORANGE', () => {
        const instructions = payMoney(commands.ORANGE, 0.5);
        expect(instructions).toBe(prices.ORANGE_PRICE - 0.5 + 'money missing');
    });

    test('should return correct for hot chocolate with one sugar', () => {
        const instructions = payMoney(commands.CHOCOLATE, 0.7, 1, true);
        expect(instructions).toBe('Hh:1:0');
    });

    test('should return correct for hot tea with no sugar', () => {
        const instructions = payMoney(commands.TEA, 0.7, 0, true);
        expect(instructions).toBe('Th::');
    });

});