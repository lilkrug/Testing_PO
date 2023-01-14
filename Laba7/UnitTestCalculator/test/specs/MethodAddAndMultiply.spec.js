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

    it('should return 8.6 when called with numbers 3.2 and 5.4', function() {
        expect(calc.methodadd(3.2,5.4)).to.be.equal(8.600000000000001);
    });

    it('should return 200 when called with numbers 10 and 20', function() {
        expect(calc.methodmultiply(10,20)).to.be.equal(200);
    });

    it('should return 1000 when called with numbers 100 and 10', function() {
        expect(calc.methodmultiply(100,10)).to.be.equal(1000);
    });

    it('should return 20 when called with numbers 40 and 20', function() {
        expect(calc.methodsubtraction(40,20)).to.be.equal(20);
    });

    it('should return 6400 when called with numbers 10000 and 3600', function() {
        expect(calc.methodsubtraction(10000,3600)).to.be.equal(6400);
    });

    it('should return 2 when called with numbers 20 and 10', function() {
        expect(calc.methoddivision(20,10)).to.be.equal(2);
    });

    it('should return 1 when called with numbers 100 and 100', function() {
        expect(calc.methoddivision(100,100)).to.be.equal(1);
    });

    it('should return 4 when called with number 2 in degree 2', function() {
        expect(calc.methodpow(2,2)).to.be.equal(4);
    });

    it('should return 64 when called with number 8 in degree 2', function() {
        expect(calc.methodpow(8,2)).to.be.equal(64);
    });
});