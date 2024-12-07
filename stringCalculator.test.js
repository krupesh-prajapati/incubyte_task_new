const { stringCalculator } = require('./stringCalculator');

describe('stringCalculator', () => {
    test('should return 0', () => {
        expect(stringCalculator("")).toBe(0);
    });

    test('should add numbers separated by commas', () => {
        expect(stringCalculator("1,2,3")).toBe(6);
    });

    test('should return error message for negative numbers', () => {
        expect(stringCalculator("1,-2,3")).toBe("negative numbers not allowed -2");
    });

    test('should list all negative numbers in error message', () => {
        expect(stringCalculator("-1,-2,3")).toBe("negative numbers not allowed -1,-2");
    });

    test('should ignore numbers greater than 1000', () => {
        expect(stringCalculator("2,1001")).toBe(2);
    });

});