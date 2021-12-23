const { maxElement} = require('../task_2/maxElement')
describe('Фунция должна вернуть реверс массива', function() {
    it('should be defined', function () {
        expect(maxElement).toBeDefined();
    })
    it('Являеться ли фунцией', function () {
        expect(typeof maxElement).toBe('function');
    })
    it('Являеться ли массивом', function () {
        expect(maxElement('sad')).toBe(0);
    })
    it('Вернет максимальный элемент', function () {
        expect(maxElement([2,3,4,5,8,-1])).toBe(8);
    })
    it('Не вернет максимальный элемент', function () {
        expect(maxElement([2,3,4,5,8,-1])).not.toBe(0);
    })
})