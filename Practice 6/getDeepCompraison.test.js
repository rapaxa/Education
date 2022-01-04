const {getDeepComparison} = require('./getDeepComparison')
describe('Делает глубокое сравнение двух обектов', function () {
    it('should be defined', function () {
        expect(getDeepComparison).toBeDefined();
    })
    it('should be function', function () {
        expect(typeof getDeepComparison).toBe('function');
    })
    it('Если входные данные не объекты', function () {
        expect(getDeepComparison(2, 3)).toBe(false);
    })
    it('Если значение null', function () {
        expect(getDeepComparison(null, null)).toBe(false);
    })
    it('Если обекты не равны', function () {
        expect(getDeepComparison({a: 1, b: {c: 4}}, {a: 1, b: {c: 1}})).toBe(false);
    })
    it('Если обекты равны', function () {
        expect(getDeepComparison({a: 1, b: {c: 1}}, {a: 1, b: {c: 1}})).toBe(true);
    })
})
