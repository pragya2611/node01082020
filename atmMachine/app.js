const ATMMachine = require('./classes/AtmMachine');

const atm = new ATMMachine();
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });



  function EnterAmount(questionText) {
    return new Promise((resolve, reject) => {
      readline.question(questionText, (input) => resolve(input) );
    });
  }

  async function start() {

    try {
    let amount = await EnterAmount("Enter the amount you wish to withdraw");
    let result = atm.withdrawMoney(new Number(amount).valueOf())
    let responseFromMachine = atm.displayOutput(result);
    console.log(responseFromMachine);
   
    } catch(error) {
      console.log(error.message);
    }
    process.exit() ;
  }

  start();