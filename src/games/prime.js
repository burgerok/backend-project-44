import getRandom from '../getRandom.js';
import playGame from '../index.js';

const prime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswerCorrect = () => {
  const question = getRandom();
  const answerCorrect = prime(question) ? 'yes' : 'no';
  return [question, answerCorrect];
};

const startGame = () => playGame(getQuestionAndAnswerCorrect, description);

export default startGame;
