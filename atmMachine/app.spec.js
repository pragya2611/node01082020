let chai = require('chai');
let mocha = require('mocha');

path = require('path');


chai.should();

let ATMMachine = require(path.join(__dirname,'classes/AtmMachine'));

describe('Atm app', () => {
    it('should return 500-1 \n 200-1',done => {
        let w900 = new ATMMachine();
        w900.withdrawMoney(900).should.equal({
            '200' : 2,
            '500' : 1
        });
        done();
    })
})