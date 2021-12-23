const {setArgValid} = require('../setArgValid')
describe('Проверяет валидацию строки', function() {
    it('should be defined', function () {
        expect(setArgValid).toBeDefined();
    })
    it('should be function', function () {
        expect(typeof setArgValid).toBe('function');
    })
    it('Если это не строка вернем Incorrect input data', function () {
        expect(setArgValid(2)).toBe('Incorrect input data');
    })
    it('Если строка меньше 2  символов  ', function () {
        expect(setArgValid('e')).toBe('Invalid');
    })
    it('Если строка больше 20  символов  ', function () {
        expect(setArgValid('eqwwwwwwwwwwwwwwwwwwwwwwwwwwww')).toBe('Invalid');
    })
    it('Если строка Начинаеться с маленькой буквы  ', function () {
        expect(setArgValid('string')).toBe('Invalid');
    })
    it('Строка должна включать символы и Заглавную букву [,!,:,-,?,., ,]', function () {
        expect(setArgValid('S,!,:,-,?,., ,')).toBe('Valid');
    })
    it('Строка не имеет символа [?]', function () {
        expect(setArgValid('S,!,:,-,,., ,')).toBe('Invalid');
    })


})
