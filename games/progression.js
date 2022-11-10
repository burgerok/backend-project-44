import getRandom from '../src/getRandom.js';
import playGame from '../src/index.js';

const description = 'What number is missing in the progression?';

const getQuestionAndAnswerCorrect = () => {
  const progressionLength = getRandom(5, 10);
  const progressionStep = getRandom(1, 10);
  const elementHiddenIndex = getRandom(0, progressionLength - 1);
  const progression = [];
  progression[0] = getRandom(1, 10);

  let question = String(progression[0]);
  if (elementHiddenIndex === 0) question = '..';

  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
    if (i === elementHiddenIndex) question = `${question} ..`;
    else question = `${question} ${progression[i]}`;
  }
  const answerCorrect = String(progression[elementHiddenIndex]);
  return [question, answerCorrect];
};

const startGame = () => playGame(getQuestionAndAnswerCorrect, description);

export default startGame;
