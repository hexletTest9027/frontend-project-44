import getRandomInteger from '../utils/utils.js';

const computedAnswer = (action, num1, num2) => {
  switch (action) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error();
  }
};

const getRandomAction = () => {
  switch (getRandomInteger(1, 3)) {
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
  const action = getRandomAction();
  const firstNumber = getRandomInteger(1, 100);
  const secondNumber = getRandomInteger(1, 100);
  const coorectAnswer = computedAnswer(action, firstNumber, secondNumber);

  return ({
    task: 'What is the result of the expression?',
    question: `${firstNumber} ${action} ${secondNumber}`,
    rightAnswer: coorectAnswer,
  });
};

export default brainCalc;
