const { swapArr} = require('../task_8/swapArr')
describe('Фунция должна  сделать свап массива', function() {
    it('should be defined', function () {
        expect(swapArr).toBeDefined();
    })
    it('Являеться ли фунцией', function () {
        expect(typeof swapArr).toBe('function');
    })
    it('Являеться ли массивом', function () {
        expect(swapArr('sad')).toBe(0);
    })
    it('Вернет  Измененный   массив', function () {
        expect(swapArr([2,3,4,5])).toStrictEqual([4,5,2,3]);
    })
    it('Не вернет реверс элемент', function () {
        expect(swapArr([2,3,4,5,8,-1])).not.toStrictEqual(0);
    })
})