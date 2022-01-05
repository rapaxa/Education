const {findTitle} = require('../findTitle')
describe('Принимая массив объектов и случайную строку. У объектов может\n' +
    'быть ключ: «title» с разными значениями.', function() {
    it('should be function', function () {
        expect(typeof findTitle).toBe('function');
    })
    it('Проверка на null', function () {
        expect(findTitle(null,null)).toBe('not arr');
    })
    it('Проверка на пустую строку', function () {
        expect(findTitle(['2'],2)).toBe('not string');
    })

    it('Проверка на пустую строку', function () {
        expect(findTitle( [{
            title: 'Some title1'
        }, {
            title: 'I like JS'
        }, {
            user: 'This obj doesn have key title js'
        }, {
            title: 'Js - is the best!'
        }],'js')).toStrictEqual([{ title: \'I like JS\'}, { title: \'Js - is the best!\' }]);
    })
})