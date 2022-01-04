const {getCrossing} = require('./getCrossing')
describe('Находит точку пересечения двух обектов', function() {
    it('should be defined', function () {
        expect(getCrossing).toBeDefined();
    })
    it('should be function', function () {
        expect(typeof getCrossing).toBe('function');
    })
    it('Если входные данные не объекты', function () {
        expect(getCrossing(2,3)).toBe(false);
    })
    it('Точка пересечения двух объектов', function () {
        expect(getCrossing({a:1,b:2},{a:1,b:3,c:4})).toStrictEqual({a:1});
    })
    it('Когда нету точки пересечения вернём пустой объект', function () {
        expect(getCrossing({a:2,b:2},{a:1,b:3,c:4})).toStrictEqual({});
    })
    // it('Не являеться ли полиднромом', function () {
    //     expect(getCrossing('А к долу лодка наша')).toBe('it"s string cant polindrome');
    // })



})
