import getRandom from '../src/getRandom.js';
import playGame from '../src/index.js';

const even = (num) => num % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswerCorrect = () => {
  const question = getRandom(1, 20);
  const answerCorrect = even(question) ? 'yes' : 'no';
  return [question, answerCorrect];
};

const startGame = () => playGame(getQuestionAndAnswerCorrect, description);

export default startGame;
