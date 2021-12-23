const {setAnagramm} = require('../setAnagramm')
describe('Проверяет две строки есть ли они Анаграммом', function () {
    it('should be defined', function () {
        expect(setAnagramm).toBeDefined();
    })
    it('should be function', function () {
        expect(typeof setAnagramm).toBe('function');
    })
    it('Если это не строка ', function () {
        expect(setAnagramm(2.1)).toBe(0);
    })
    it('Если это Null ," ",str ', function () {
        expect(setAnagramm(null)).toBe(0);
    })
    it('Если строки анаграммы ', function () {
        expect(setAnagramm("Паша","ашап")).toBe("Строки есть Анаграммами");
    })
    it('Если строки анаграммы ', function () {
        expect(setAnagramm("Паша","ааап")).toBe("Строки не есть Анаграммами");
    })

})
