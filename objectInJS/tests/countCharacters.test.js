const {countCharacters} = require('../countCharacters')
describe('Принимая строку, ваша функция должна вернуть обьект, в котором\n' +
    'ключи – символы строки, значение – количество повторений символов в\n' +
    'строке', function() {
    it('should be defined', function () {
        expect(countCharacters).toBeDefined();
    })
    it('should be function', function () {
        expect(typeof countCharacters).toBe('function');
    })
    it('Если строка null', function () {
        expect( countCharacters(null)).toBe(false);
    })
    it('Если строка пустая', function () {
        expect( countCharacters('')).toBe(false);
    })
    it('Должны получить из слова g:2,a:1"', function () {
        expect( countCharacters('gga')).toStrictEqual({g:2,a:1});
    })

})