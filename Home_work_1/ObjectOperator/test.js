const assert = require('assert')
const script = require('./script');


describe("getNumAndCalc", function() {
    it("Если а четное значит а*b", function() {
        assert.equal(script.getNumAndCalc(2, 3), 6);
    });
    it("Если а  Не четное значит а+b", function() {
        assert.equal(script.getNumAndCalc(3, 3), 6);
    });
})
describe("getCord" , function (){
    it("Если лежит в I кординате" ,function (){
        assert.equal(script.getCord(1,1),1)
    })
    it("Если лежит в II кординате" ,function (){
        assert.equal(script.getCord(2,-1),2)
    })
    it("Если лежит в III кординате" ,function (){
        assert.equal(script.getCord(-1,-1),3)
    })
    it("Если лежит в IV кординате" ,function (){
        assert.equal(script.getCord(-1,1),4)
    })
})
describe("sum" , function (){
    it("Если а >0 b>0 c>0" ,function (){
        assert.equal(script.sum(1,1 ,3 ),5)
    })
    it('Если а<0',function (){
        assert.equal(script.sum(-1,1,2),3)
    })
    it('Если b<0',function (){
        assert.equal(script.sum(1,-1,2),3)
    })
    it('Если c<0',function (){
        assert.equal(script.sum(1,1,-2),2)
    })
})
describe("sum" , function (){
    it("Если сумма больше произведения + 3" ,function (){
        assert.equal(script.sumMax(1,1 ,1 ),6)
    })
    it("Если сумма меньше произведения + 3" ,function (){
        assert.equal(script.sumMax(5,1 ,2 ),13)
    })
})
describe("getRate", function() {

    it("F", function() {
        assert.equal(script.getRate(13), 'F');
    });

    it("E", function() {
        assert.equal(script.getRate(36), 'E');
    });
    it("D", function() {
        assert.equal(script.getRate(51), 'D');
    });
    it("C", function() {
        assert.equal(script.getRate(70), 'C');
    });
    it("B", function() {
        assert.equal(script.getRate(75), 'B');
    });
    it("A", function() {
        assert.equal(script.getRate(97), 'A');
    });




});

