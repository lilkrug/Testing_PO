class Calculator {
    constructor() {

    };

    methodadd(a,b) {
            return a + b;
    }

    methodmultiply(a,b) {
            return a * b;
    }

    methodsubtraction(a,b) {
            return a - b;
    }

    methoddivision(a,b) {
            return a / b;
    }

    methodpow(a,b) {
        return Math.pow(a,b);
    }
}

module.exports = Calculator;