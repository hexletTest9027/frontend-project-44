import readlineSync from 'readline-sync';
import cli from '../cli.js';

const brainCalc = () => {
  cli();
  for (let i = 0; i < 3; i += 1) {
    let action;
    const firstNumber = Math.floor(Math.random() * 100) + 1;
    const secondNumber = Math.floor(Math.random() * 100) + 1;
    let coorectAnswer;
    switch (i) {
      case 0:
        action = '+';
        coorectAnswer = firstNumber + secondNumber;
        break;
      case 1:
        action = '-';
        coorectAnswer = firstNumber - secondNumber;
        break;
      case 2:
        action = '*';
        coorectAnswer = firstNumber * secondNumber;
        break;
      default:
        action = '-';
    }
    console.log('What is the result of the expression?');
    console.log(`Question: ${firstNumber} ${action} ${secondNumber}`);
    const answer = readlineSync.question('Your answer:');
    if (Number(answer) === coorectAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '175'.`);
      console.log("Let's try again, Sam!");
      return;
    }
  }
};

export default brainCalc;
