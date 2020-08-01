let chai = require('chai');
let mocha = require('mocha');

path = require('path');


chai.should();

let ATMMachine = require(path.join(__dirname,'classes/AtmMachine'));

describe('Atm app', () => {
    it('should return \n500-1 \n 200-2',done => {
        let w900 = new ATMMachine();
        w900.withdrawMoney(900).should.to.deep.include({ '200': 2, '500': 1 });
        done();
    })
})

describe('Atm app', () => {
    it('should return \n2000-4\n 500-3 \n 200-1 \n 100-1',done => {
        let w9800 = new ATMMachine();
        w9800.withdrawMoney(9800).should.to.deep.include({'100': 1, '200': 1, '500': 3 , '2000' : 4 });
        done();
    })
})