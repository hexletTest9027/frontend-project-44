import random from '../utils/utils.js';

const constbrainProgression = () => {
  const progress = [];
  const base = random(1, 100);
  const coef = random(1, 10);
  for (let index = 0; index < 10; index += 1) {
    progress.push(base + (coef * index));
  }
  const index = random(0, progress.length - 1);
  const result = progress[index];
  progress[index] = '..';
  return ({
    task: 'What number is missing in the progression?',
    question: progress.join(' '),
    rightAnswer: result,
  });
};

export default constbrainProgression;
