const {getStrAndNum} = require('../getStrAndNum')
describe('Принимает два аргумента число в виде строки и число', function() {
    it('should be defined', function () {
        expect(getStrAndNum).toBeDefined();
    })
    it('should be function', function () {
        expect(typeof getStrAndNum).toBe('function');
    })
    it('Если аргумент типа number делиться без остатка на 3,5,15 то num * -1 ', function () {
        expect(getStrAndNum("1",15)).toBe(-14);
    })
    it('Если аргумент типа number не делиться без остатка на 3,5,15 то num  ', function () {
        expect(getStrAndNum("1",14)).toBe(15);
    })
    it('Если первый аргумент не являеться строкой ', function () {
        expect(getStrAndNum(1,14)).toBe(0);
    })
    it('Если второй аргумент не являеться числом ', function () {
        expect(getStrAndNum(1,"14")).toBe(0);
    })



})