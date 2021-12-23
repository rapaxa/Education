const {loopStop} = require('../loopStop')
describe('Function checked it is palindrome ?', function () {
    it('should be defined', function () {
        expect(loopStop).toBeDefined();
    })
    it('should be function', function () {
        expect(typeof loopStop).toBe('function');
    })
    it('Цикл должен остановиться на 15 14', function () {
        expect(loopStop ()).toBe(" 15 14 ");
    })
    it('Цикл должен остановиться на 15 14', function () {
        expect(loopStop ()).not.toBe(" 15 13 ");
    })
})