const {isPalindrome} = require('../isPalindrome')
describe('Function checked it is palindrome ?', function() {
    it('should be defined', function () {
        expect(isPalindrome).toBeDefined();
    })
    it('should be function', function () {
        expect(typeof isPalindrome).toBe('function');
    })
    it('Если это не строка вернем 0', function () {
        expect(isPalindrome(2)).toBe(0);
    })
    it('являеться ли полиднромом', function () {
        expect(isPalindrome('А к долу лодка')).toBe('it"s string is polindrome');
    })
    it('Не являеться ли полиднромом', function () {
        expect(isPalindrome('А к долу лодка наша')).toBe('it"s string cant polindrome');
    })



})
