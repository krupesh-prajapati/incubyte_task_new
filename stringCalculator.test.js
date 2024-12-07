const { stringCalculator } = require('./stringCalculator');

describe('stringCalculator', () => {
    test('should return 0', () => {
        expect(stringCalculator("")).toBe(0);
    });

});