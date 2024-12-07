const { stringCalculator } = require('./stringCalculator');

describe('stringCalculator', () => {
    test('should return 0', () => {
        expect(stringCalculator("")).toBe(0);
    });

    test('should add numbers separated by commas', () => {
        expect(stringCalculator("1,2,3")).toBe(6);
    });

    test('should list all negative numbers in error message', () => {
        expect(stringCalculator("1,-2,3")).toBe("negative numbers not allowed -2");
    });

    test('should list all negative numbers in error message', () => {
        expect(stringCalculator("-1,-2,3")).toBe("negative numbers not allowed -1,-2");
    });

    test('should ignore numbers greater than 1000', () => {
        expect(stringCalculator("2,1001")).toBe(2);
    });

    test('should handle newline as a delimiter', () => {
        expect(stringCalculator("1\n2,3")).toBe(6);
    });

    test('should support custom character delimiter', () => {
        expect(stringCalculator("//;\n1;2;3")).toBe(6);
    });

    test('should support custom multi-character delimiters', () => {
        expect(stringCalculator("//[***]\n1***2***3")).toBe(6);
    });

    test('should support multiple custom delimiters', () => {
        expect(stringCalculator("//[*][%]\n1*2%3")).toBe(6);
    });

    test('should handle multiple multi-character delimiters', () => {
        expect(stringCalculator("//[***][%%%]\n1***2%%%3")).toBe(6);
    });

    test('should handle edge case with no numbers', () => {
        expect(stringCalculator("//[***]\n")).toBe(0);
    });

    test('should handle edge case with empty delimiters', () => {
        expect(stringCalculator("//[]\n1")).toBe(1);
    });
});