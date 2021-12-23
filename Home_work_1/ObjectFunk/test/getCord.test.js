const { getCord} = require('../task_2/getCord')
describe('Функция измеряет расстояни между точками', function() {
    it('should be defined', function () {
        expect(getCord).toBeDefined();
    })
    it('Являеться ли фунцией', function () {
        expect(typeof getCord).toBe('function');
    })
    it('Вывидим расстояние ', function () {
        expect(getCord(2,3,5,2)).toBe(3.16);
    })
    it('Если не являеться числом', function () {
        expect(getCord('sda')).toBe(0);
    })
    it('Вывидим расстояние ', function () {
        expect(getCord(2,'e',5,2)).toBe(0);
    })

})