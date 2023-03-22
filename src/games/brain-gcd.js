import readlineSync from 'readline-sync';
import cli from '../cli.js';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const findCommonDivider = (num1, num2) => {
  const maxNumber = num1 > num2 ? num2 : num1;
  for (let i = maxNumber; i > 0; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      return i;
    }
  }
  return 1;
};

const game = () => {
  cli();
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    console.log('Find the greatest common divisor of given numbers.');
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer:');
    const commonDivider = findCommonDivider(num1, num2);
    console.log(`Your answer: ${answer}`);
    if (Number(answer) === commonDivider) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${commonDivider}.Let's try again, Sam!`);
    }
  }
};
export default game;
