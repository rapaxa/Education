const { sortInsert} = require('../task_9/sortInsert')
describe('Фунция должна  отсортировать  массив', function() {
    it('should be defined', function () {
        expect(sortInsert).toBeDefined();
    })
    it('Являеться ли фунцией', function () {
        expect(typeof sortInsert).toBe('function');
    })
    it('Являеться ли массивом', function () {
        expect(sortInsert('sad')).toBe(0);
    })
    it('Не вернет массив', function () {
        expect(sortInsert(4)).not.toBe([2,3,4,5,8,-1]);
    })
    it('сделает сортировку массива', function () {
        expect(sortInsert([2,3,4,5,8,-1,-90])).toStrictEqual([-90,-1,2,3,4,5,8]);
    })
})