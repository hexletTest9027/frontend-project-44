import getRandomInteger from '../utils/utils.js';

const findCommonDivider = (num1, num2) => {
  const maxNumber = num1 > num2 ? num2 : num1;
  for (let i = maxNumber; i > 0; i -= 1) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      return i;
    }
  }
  return 1;
};

const brainGCD = () => {
  const num1 = getRandomInteger(1, 100);
  const num2 = getRandomInteger(1, 100);
  const commonDivider = findCommonDivider(num1, num2);
  return ({
    task: 'Find the greatest common divisor of given numbers.',
    question: `${num1} ${num2}`,
    rightAnswer: commonDivider,
  });
};

export default brainGCD;
