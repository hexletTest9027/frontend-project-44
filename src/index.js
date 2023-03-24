import readlineSync from 'readline-sync';
import cli from './cli.js';

export default function foo(game) {
  const name = cli();
  for (let i = 0; i < 3; i += 1) {
    const { task, question, rightAnswer } = game();
    console.log(task);
    console.log(question);
    const answer = readlineSync.question('Your answer:');
    if (answer.toString() === rightAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.Let's try again, ${name}!`);
      return;
    }
    game();
  }
}
