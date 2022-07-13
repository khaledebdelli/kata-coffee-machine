const { drinkMaker } = require("./index");
const data = require("./data");

describe('Turn order into string instructions', () => {
    test('indicates me the shortage and that a notification has been sent', () => {
        const instructions = drinkMaker(data);
        expect(instructions).toBe('shortage, a notification has been sent');
    });
});