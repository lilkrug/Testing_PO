const Calculator = require('../../app/Calculator');
const {expect} = require('chai');

describe('Method add and multiply in calculator', function() {
    let calc;
    beforeEach(() => {
        calc = new Calculator();
    })

    afterEach(() => {
        calc = null;
    })
    
    
    it('should return 8 when called with numbers 3 and 5', function() {
        expect(calc.methodadd(3,5)).to.be.equal(8);
    });

    it('should return 20 when called with numbers 10 and 20', function() {
        expect(calc.methodmultiply(10,20)).to.be.equal(200);
    });
});