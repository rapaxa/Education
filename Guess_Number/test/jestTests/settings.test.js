const {settings} = require('../settings')
describe('Function принимает Аргументы ( Введенное число, Указанное к-во попыток,Загаданное число,подсчет попыток) ?', function() {
    it('should be defined', function () {
        expect(settings).toBeDefined();
    })
    it('should be function', function () {
        expect(typeof settings).toBe('function');
    })


})