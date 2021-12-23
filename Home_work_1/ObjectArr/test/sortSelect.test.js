const { sortSelect} = require('../task_9/sortSelect')
describe('Фунция должна  отсортировать  массив', function() {
    it('should be defined', function () {
        expect(sortSelect).toBeDefined();
    })
    it('Являеться ли фунцией', function () {
        expect(typeof sortSelect).toBe('function');
    })
    it('Являеться ли массивом', function () {
        expect(sortSelect('sad')).toBe(0);
    })
    it('Не вернет массив', function () {
        expect(sortSelect(4)).not.toBe([2,3,4,5,8,-1]);
    })
    it('сделает сортировку массива', function () {
        expect(sortSelect([2,3,4,5,8,-1,-90])).toStrictEqual([-90,-1,2,3,4,5,8]);
    })
})