const { getReverseArr} = require('../task_6/getReverseArr')
describe('Фунция должна вернуть реверс массива', function() {
    it('should be defined', function () {
        expect(getReverseArr).toBeDefined();
    })
    it('Являеться ли фунцией', function () {
        expect(typeof getReverseArr).toBe('function');
    })
    it('Являеться ли массивом', function () {
        expect(getReverseArr('sad')).toBe(0);
    })

    it('Если в массиве есть строки', function () {
        expect(getReverseArr([2,'3'])).toBe(NaN);
    })
    it('Происходит реверс', function () {
        expect(getReverseArr([15, 3, 4, 5, -50, 100, 19, 200])).toBe('200 19 100 -50 5 4 3 15 ')
    })
})