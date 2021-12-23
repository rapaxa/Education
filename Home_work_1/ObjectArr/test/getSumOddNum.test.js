const { getSumOddNum} = require('../task_7/getSumOddNum')
describe('Фунция должна вернуть сумму нечетных чисел', function() {
    it('should be defined', function () {
        expect(getSumOddNum).toBeDefined();
    })
    it('Являеться ли фунцией', function () {
        expect(typeof getSumOddNum).toBe('function');
    })
    it('Являеться ли массивом', function () {
        expect(getSumOddNum('sad')).toBe(0);
    })
    it('Вернет сумму нечетных чисел ', function () {
        expect(getSumOddNum([2,3,4,5,8,-1])).toBe(7);
    })
    it('Не вернет минимальный элемент', function () {
        expect(getSumOddNum([2,3,4,5,8,-1])).not.toBe(0);
    })
})