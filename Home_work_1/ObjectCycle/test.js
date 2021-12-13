const assert = require('assert')
const script = require('./script.js');
describe("Найти сумму четных чисел в диапазоне до 99", function() {
    it("К-во и сумма", function() {
        assert.equal(script.taskOne( ),50, 2450);
    });

})
describe("Проверка на простое число", function() {
    it("Если простое ", function() {
        assert.equal(script.taskTwo( 3),"Простое");
    });
    it("Если  не простое ", function() {
        assert.equal(script.taskTwo( 10),"Обычное");
    });

})
describe("Найти корень натурального числа до целого", function() {
    it("Корень 4  ", function() {
        assert.equal(script.taskThree( 4),2);
    });
    it("Корень 3", function() {
        assert.equal(script.taskThree( 3),2);
    });

})
describe("Найти корень натурального числа до целого", function() {
    it("Корень 4  ", function() {
        assert.equal(script.taskThreeTwo( 4),2);
    });
    it("Корень 3", function() {
        assert.equal(script.taskThreeTwo( 3),2);
    });

})
describe("Факториал числа", function() {
    it("факториал 2 ", function() {
        assert.equal(script.taskFour( 2),2);
    });
    it("факториал 10 ", function() {
        assert.equal(script.taskFour( 7),5040);
    });
    it("факториал -1 ", function() {
        assert.equal(script.taskFour( -1),0);
    });
})

describe("сумма цифр числа", function() {
    it("число 12 ", function() {
        assert.equal(script.taskFive( 12),3);
    });
    it("число 123", function() {
        assert.equal(script.taskFive( 123),6);
    });
    it("-123", function() {
        assert.equal(script.taskFive( 1323),9);
    });
})

describe("Вывести отоброжение числа ", function() {
    it("123 ", function() {
        assert.equal(script.taskSix( 123),321);
    });
    it("561 ", function() {
        assert.equal(script.taskSix( 561),165);
    });
    it("965", function() {
        assert.equal(script.taskSix( 965),569);
    });
})