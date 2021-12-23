const { getNumDay} = require('../task_3\/getNumDay')
describe('Функция возвращает число в виде строки', function() {
    it('should be defined', function () {
        expect(getNumDay).toBeDefined();
    })
    it('Являеться ли фунцией', function () {
        expect(typeof getNumDay).toBe('function');
    })
    it('должны вернуть 0 так как это не число ', function () {
        expect(getNumDay('2wq')).toBe(0);
    })
    it('Если число вне диапазона от 0 до 1000', function () {
        expect(getNumDay(-1)).toBe(0);
    })
    it('Если число вне диапазона от 0 до 1000', function () {
        expect(getNumDay(1000)).toBe(0);
    })
    it('Получи число от одного ', function () {
        expect(getNumDay(2)).toBe("Два ");
    })
    it('Получи число от двадцати ', function () {
        expect(getNumDay(10)).toBe("Десять ");
    })
    it('Получи число от сотни ', function () {
        expect(getNumDay(100)).toBe("Сто " + " " + " ");
    })
    it('Получи число от сотни ', function () {
        expect(getNumDay(101)).toBe("Сто " + " " + "Один ");
    })
    it('Получи число от двухста с десятками ', function () {
        expect(getNumDay(211)).toBe("Двести " + "Одинадцать " );
    })
    it('Получи число от двухста с десятками ', function () {
        expect(getNumDay(245)).toBe("Двести " + "Сорок " + "Пять ");
    })


})