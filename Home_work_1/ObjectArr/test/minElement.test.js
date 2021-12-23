const { mi, minElement} = require('../task_1/minElement')
describe('Фунция должна вернуть реверс массива', function() {
    it('should be defined', function () {
        expect(minElement).toBeDefined();
    })
    it('Являеться ли фунцией', function () {
        expect(typeof minElement).toBe('function');
    })
    it('Являеться ли массивом', function () {
        expect(minElement('sad')).toBe(0);
    })
    it('Вернет минимальный элемент', function () {
        expect(minElement([2,3,4,5,8,-1])).toBe(-1);
    })
    it('Не вернет минимальный элемент', function () {
        expect(minElement([2,3,4,5,8,-1])).not.toBe(0);
    })
})