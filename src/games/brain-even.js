import readlineSync from 'readline-sync';

const brainEven = () => {
  for (let i = 0; i < 3; i += 1) {
    let isEven;
    const randomInteger = Math.floor(Math.random() * 100);
    if (randomInteger % 2 === 0) {
      isEven = true;
    } else {
      isEven = false;
    }
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const YourAnswer = readlineSync.question(`Question: ${randomInteger} `);
    if (YourAnswer === 'yes' && isEven === true) {
      console.log('correct');
    } else if (YourAnswer === 'no' && isEven === false) {
      console.log('correct');
    } else {
      console.log(`${YourAnswer} is wrong answer ;(. Correct answer was ${isEven === true ? 'yes' : 'no'}.
        Let's try again, Bill!`);
      return;
    }
  }
};

export default brainEven;
