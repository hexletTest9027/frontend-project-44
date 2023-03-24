import getRandomInteger from '../utils/utils.js';

const brainEven = () => {
  let isEven;
  const randomInteger = getRandomInteger(1, 100);
  if (randomInteger % 2 === 0) {
    isEven = true;
  } else {
    isEven = false;
  }
  return ({
    task: 'Answer "yes" if the number is even, otherwise answer "no".',
    question: `Question: ${randomInteger}`,
    rightAnswer: isEven === true ? 'yes' : 'no',
  });
};

export default brainEven;
