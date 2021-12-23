const { calcOddNum} = require('../task_5/calcOddNum')
describe('calcOddNum', function() {
    it('should be defined', function () {
        expect(calcOddNum()).toBeDefined();
    })
    it('Являеться ли фунцией', function () {
        expect(typeof calcOddNum).toBe('function');
    })
    it('Если введены не числовые данные вернем NaN', () => {
        expect(calcOddNum([3, 4, '2'])).toBe(NaN)
    })
    it('Если не являеться массивом вернём 0', () => {
        expect(calcOddNum('asd')).toBe(0)
    })
    it('Должна вернуть количество не чётных чисел', () => {
        expect(calcOddNum([2, -3, -1])).toBe(2)
    })
    it('Ничего не должна возвращать ', function () {
        expect(calcOddNum([2, 4, 6, 8, 10])).toBe(0)
    });
})