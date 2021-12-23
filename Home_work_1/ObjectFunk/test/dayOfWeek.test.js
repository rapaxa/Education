const { dayOfWeek} = require('../task_1/dayOfWeek')
describe('Функция выводит день недели по номеру', function() {
    it('should be defined', function () {
        expect(dayOfWeek).toBeDefined();
    })
    it('Являеться ли фунцией', function () {
        expect(typeof dayOfWeek).toBe('function');
    })
    it('Выведем день недели', function () {
        expect(dayOfWeek(2)).toBe("Вторник");
    })
    it('Выведем день недели', function () {
        expect(dayOfWeek(8)).toBe(0);
    })
    it('Выведем день недели', function () {
        expect(dayOfWeek(3.1)).toBe(0);
    })
    it('Выведем день недели', function () {
        expect(dayOfWeek('sd')).toBe(0);
    })

})