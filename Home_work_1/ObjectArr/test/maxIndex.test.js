const { maxIndex} = require('../task_4/maxIndex')
describe('Фунция должна вернуть реверс массива', function() {
    it('should be defined', function () {
        expect(maxIndex).toBeDefined();
    })
    it('Являеться ли фунцией', function () {
        expect(typeof maxIndex).toBe('function');
    })
    it('Являеться ли массивом', function () {
        expect(maxIndex('sad')).toBe(0);
    })
    it('Вернет максимальный индекс элемента', function () {
        expect(maxIndex([2,3,4,5,8,-1])).toBe(4);
    })
    it('Не вернет максимальный элемент', function () {
        expect(maxIndex([2,3,4,5,8,-1])).not.toBe(0);
    })
})