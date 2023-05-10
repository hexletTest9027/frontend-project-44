import readlineSync from 'readline-sync';

export default function startGame(game) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const { task } = game();
  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    const { question, rightAnswer } = game();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer:');
    if (answer.toString() === rightAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.Let's try again, ${name}!`);
      return;
    }
  }
}
