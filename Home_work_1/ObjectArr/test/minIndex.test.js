const { minIndex} = require('../task_3/minIndex')
describe('Фунция должна вернуть реверс массива', function() {
    it('should be defined', function () {
        expect(minIndex).toBeDefined();
    })
    it('Являеться ли фунцией', function () {
        expect(typeof minIndex).toBe('function');
    })
    it('Являеться ли массивом', function () {
        expect(minIndex('sad')).toBe(0);
    })
    it('Вернет минимальный индекс элемента', function () {
        expect(minIndex([2,3,4,5,8,-1])).toBe(5);
    })
    it('Не вернет минимальный элемент', function () {
        expect(minIndex([2,3,4,5,8,-1])).not.toBe(0);
    })
})