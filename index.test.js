const { drinkMaker } = require("./index");
const data = require("./data");

describe('Turn order into string instructions', () => {
    test('should return correct total and numbers of each drink', () => {
        const instructions = drinkMaker(data);
        expect(instructions).toBe('3 coffee and 1 tea and 2 chocolate and 2 orange with a total of 4.4');
    });
});