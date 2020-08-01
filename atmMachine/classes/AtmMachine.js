
const {
    NoteUnavailableException,InvalidAmountException
} = require('./Exceptions');

const ERROR_TYPES = require('../errorTypes').ERROR_TYPES;
class AtmMachine {

    constructor() {

    }
   


    static MoneyinAtm(){
        const money = {
            2000:5,
            500:7,
            200:2,
            100:4
        };
        return money;
    }

    static sortArray(moneyKeysArr) {
        if(moneyKeysArr.length > 0)  {
            moneyKeysArr.sort((a,b)=> {
               a = new Number(a).valueOf();
               b = new Number(b).valueOf();
                return(b -a);
            })
        }
       return moneyKeysArr;
    }

    withdrawMoney(value = 0) {
        

        const money = AtmMachine.MoneyinAtm();
        const moneyKeys =  AtmMachine.sortArray(Object.keys(money));
        const notesJson = {};
        
        
        if(value == 0) {
            throw new InvalidAmountException(ERROR_TYPES.NAN);
        }

        if(isNaN(value)) {
            throw new InvalidAmountException(ERROR_TYPES.NAN);
        }

        if(isNaN(value)) {
            throw new InvalidAmountException(ERROR_TYPES.NAN);
        }

        if(!Number.isInteger(value)) {
            throw new InvalidAmountException(ERROR_TYPES.NAN);
        }

        if(value%moneyKeys[moneyKeys.length -1] !== 0) {
            throw new NoteUnavailableException(ERROR_TYPES.NOT_AVAILABLE);
        }

        for(let i =0; moneyKeys.length > 0 && value != 0  ; i++) {
        
            
            if(moneyKeys[i] <= value) {
                // getting the number of notes for the note in atm
                let currentNoteDenomination = money[moneyKeys[i]];
                
                //either the calculated denomination or max denomination present in atm 

                let calculatedDenomination = parseInt((value / moneyKeys[i])) < currentNoteDenomination? parseInt(value / moneyKeys[i]) : currentNoteDenomination;
                
                //update money in atm 
                money[moneyKeys[i]] = money[moneyKeys[i]] - calculatedDenomination;
                
                //update response
                notesJson[moneyKeys[i].toString()] = calculatedDenomination;
                //update amount
                value = value - calculatedDenomination*moneyKeys[i];
                
            } 
        }
        
        return notesJson;
        

    }

    displayOutput(notesJson) {
        let notesArr = AtmMachine.sortArray(Object.keys(notesJson));
        let responseByATM = '';
        for(let note in notesArr) {
            let numberOfNotes = notesJson[notesArr[note]];
            responseByATM = responseByATM + '\n'+ notesArr[note] + '-'  + numberOfNotes ;
        }
        return responseByATM;
    }
}

module.exports = AtmMachine;