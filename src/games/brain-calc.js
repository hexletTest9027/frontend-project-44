import readlineSync from 'readline-sync';
import cli from '../cli.js';
import getRandomInteger from '../utils/utils.js';

const getRandomAction = () => {
  const random = getRandomInteger(1, 3);
  switch (random) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return '+';
  }
};

const brainCalc = () => {
  cli();
  for (let i = 0; i < 3; i += 1) {
    let action = getRandomAction();
    const firstNumber = Math.floor(Math.random() * 100) + 1;
    const secondNumber = Math.floor(Math.random() * 100) + 1;
    let coorectAnswer;
    switch (action) {
      case '+':
        coorectAnswer = firstNumber + secondNumber;
        break;
      case '-':
        coorectAnswer = firstNumber - secondNumber;
        break;
      case '*':
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
