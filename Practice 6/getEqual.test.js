const {getEqual} = require('./getEqual')
describe('Проверяет обект на пустоту', function () {
    it('should be defined', function () {
        expect(getEqual).toBeDefined();
    })
    it('should be function', function () {
        expect(typeof getEqual).toBe('function');
    })
    it('Если входные данные не объекты', function () {
        expect(getEqual(2, 3)).toBe('type not object');
    })
    it('Если значение null', function () {
        expect(getEqual(null)).toBe('type not object');
    })
    it('Если обект пуст', function () {
        expect(getEqual({})).toBe(true);
    })
    it('Если обект undefined', function () {
        expect(getEqual({a:undefined})).toBe(true);
    })
    it('Если обект не пустой', function () {
        expect(getEqual({a:2})).toBe(false);
    })
})