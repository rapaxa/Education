const {saveBtn} = require('../save')
describe('Function принимает Аргументы диапазона от 1 до 200  ?', function() {
    it('should be defined', function () {
        expect(saveBtn).toBeDefined();
    })
    it('should be function', function () {
        expect(typeof saveBtn).toBe('function');
    })
    it('Если диапазон число есть число ', function () {
        expect( saveBtn(1,2)).toBe(true);
    })
    it('Если число находиться не в диапазон ', function () {
        expect( saveBtn(-1,2)).toBe(false);
    })
})