import getRandom from '../getRandom.js';
import playGame from '../index.js';

const generateQuestion = (start, length, step, index) => {
  const progression = [];
  progression[0] = start;
  let question = String(progression[0]);
  if (index === 0) question = '..';
  for (let i = 1; i < length; i += 1) {
    progression[i] = progression[i - 1] + step;
    if (i === index) question = `${question} ..`;
    else question = `${question} ${progression[i]}`;
  }
  return question;
};

const description = 'What number is missing in the progression?';

const getQuestionAndAnswerCorrect = () => {
  const progressionStart = getRandom(1, 10);
  const progressionLength = getRandom(5, 10);
  const progressionStep = getRandom(1, 10);
  const elementHiddenIndex = getRandom(0, progressionLength - 1);
  
  const question = generateQuestion(progressionStart, progressionLength, progressionStep, elementHiddenIndex);
  const answerCorrect = String(progressionStart + progressionStep * elementHiddenIndex);
  return [question, answerCorrect];
};

const startGame = () => playGame(getQuestionAndAnswerCorrect, description);

export default startGame;
