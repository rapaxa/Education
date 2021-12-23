const {checkNumber} = require('../checkNumber')
describe('проверяет число : Простое, четное,кратно 10', function() {
    it('should be defined', function () {
        expect(checkNumber).toBeDefined();
    })
    it('should be function', function () {
        expect(typeof checkNumber).toBe('function');
    })
    it('Если  тип строки не число', function () {
        expect(checkNumber("7")).toStrictEqual(0);
    })
    it('Если число простое не четное не кратное 10', function () {
        expect(checkNumber(7)).toStrictEqual([true,false,false]);
    })
    it('Если число не простое  четное  кратное 10', function () {
        expect(checkNumber(-10)).toStrictEqual([false,true,true]);
    })
    it('Если число простое  четное  не кратное 10', function () {
        expect(checkNumber(2)).toStrictEqual([true,true,false]);
    })



})
