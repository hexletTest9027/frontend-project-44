import random from '../utils/utils.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const brainPime = () => {
  const number = random(1, 100);
  return ({
    task: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    question: number,
    rightAnswer: isPrime(number) ? 'yes' : 'no',
  });
};

export default brainPime;
