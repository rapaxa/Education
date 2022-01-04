const {getGameNumber} = require('../getGameNumber')
describe('Function принимает Аргументы ( Введенное число, Указанное к-во попыток,Загаданное число,подсчет попыток) ?', function() {
    it('should be defined', function () {
        expect(getGameNumber).toBeDefined();
    })
    it('should be function', function () {
        expect(typeof getGameNumber).toBe('function');
    })
    it('Если это Угаданное число', function () {
        expect(getGameNumber(3,1,3,0)).toBe('Угадал за 1 попыток');
    })
    it('Если это Угаданное число за 2 попытки', function () {
        expect(getGameNumber(3,2,3,1)).toBe('Угадал за 2 попыток');
    })
    it('Если это  число Больше загаданного', function () {
        expect(getGameNumber(3,2,2,1)).toBe('Перебор, осталосб : 1 попыток');
    })
    it('Если это  число меньше загаданного', function () {
        expect(getGameNumber(1,2,2,1)).toBe('Недолет, осталосб : 1 попыток');
    })
    it('Если закончились попытки', function () {
        expect(getGameNumber(1,0,2,1)).toBe("Игра Закончена ");
    })

})