const { sortBubble} = require('../task_9/sortBubble')
describe('Фунция должна  отсортировать  массив', function() {
    it('should be defined', function () {
        expect(sortBubble).toBeDefined();
    })
    it('Являеться ли фунцией', function () {
        expect(typeof sortBubble).toBe('function');
    })
    it('Являеться ли массивом', function () {
        expect(sortBubble('sad')).toBe(0);
    })
    it('Не вернет массив', function () {
        expect(sortBubble(4)).not.toBe([2,3,4,5,8,-1]);
    })
    it('сделает сортировку массива', function () {
        expect(sortBubble([2,3,4,5,8,-1,-90])).toStrictEqual([-90,-1,2,3,4,5,8]);
    })
})