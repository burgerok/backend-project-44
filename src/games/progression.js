import getRandom from '../getRandom.js';
import playGame from '../index.js';

const getQuestion = (start, length, step, index) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + (step * i));
  }
  progression[index] = '..';
  return progression.join(' ');
};

const description = 'What number is missing in the progression?';

const getQuestionAndAnswerCorrect = () => {
  const progressionStart = getRandom(1, 10);
  const progressionLength = getRandom(5, 10);
  const progressionStep = getRandom(1, 10);
  const hiddenIndex = getRandom(0, progressionLength - 1);
  const question = getQuestion(progressionStart, progressionLength, progressionStep, hiddenIndex);
  const answerCorrect = String(progressionStart + progressionStep * hiddenIndex);
  return [question, answerCorrect];
};

const startGame = () => playGame(getQuestionAndAnswerCorrect, description);

export default startGame;
