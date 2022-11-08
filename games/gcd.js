import getRandom from '../src/getRandom.js';
import playGame from '../src/index.js';

const getNOD = (num1, num2) => {
  if (num2 > num1) return getNOD(num2, num1);
  if (!num2) return num1;
  return getNOD(num2, num1 % num2);
};

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswerCorrect = () => {
  const num1 = getRandom();
  const num2 = getRandom();
  const question = `${num1} ${num2}`;
  const answerCorrect = String(getNOD(num1, num2));
  return [question, answerCorrect];
};

const startGame = () => playGame(getQuestionAndAnswerCorrect, description);

export default startGame;
