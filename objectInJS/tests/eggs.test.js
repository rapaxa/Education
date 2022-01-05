const {getCookingTime} = require('../eggs')
describe('Сколько времени будем варить яйца', function() {
    it('should be function', function () {
        expect(typeof getCookingTime).toBe('function');
    })
    it('Проверка на null', function () {
        expect(getCookingTime(null)).toBe(false);
    })
    it('Проверка на пустую строку', function () {
        expect(getCookingTime('')).toBe(false);
    })
    it('5 яица 5 минут', function () {
        expect( getCookingTime(5)).toBe(5);
    })
    it('6 яица 10 минут', function () {
        expect( getCookingTime(6)).toBe(10);
    })
    it('16 яица 20 минут', function () {
        expect( getCookingTime(16)).toBe(20);
    })
})