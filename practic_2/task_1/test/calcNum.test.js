const {calcNum} = require('../calcNum')
describe('Function checked it is palindrome ?', function () {
    it('should be defined', function () {
        expect(calcNum).toBeDefined();
    })
    it('should be function', function () {
        expect(typeof calcNum).toBe('function');
    })
    it('Если это не целое число ', function () {
        expect(calcNum(2.1)).toBe(0);
    })
    it('Если это Null ," ",str ', function () {
        expect(calcNum(null)).toBe(0);
    })
    it('если введем 5 получим 1 2 three 4 five', function () {
        expect(calcNum(5)).toBe('1 2 three 4 Five ');
    })
    it('если введем 15 получим 1 2 three 4 five ... 14 threeFive', function () {
        expect(calcNum(15)).toBe('1 2 three 4 Five three 7 8 three Five 11 three 13 14 threeFive ');
    })

})
