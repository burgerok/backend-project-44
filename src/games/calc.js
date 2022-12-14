import getRandom from '../getRandom.js';
import playGame from '../index.js';

const calculator = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`operation '${operator}' is not supported`);
  }
};
const description = 'What is the result of the expression?';

const getQuestionAndAnswerCorrect = () => {
  const num1 = getRandom();
  const num2 = getRandom();
  const operators = ['+', '-', '*'];
  const operator = operators[getRandom(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const answerCorrect = String(calculator(num1, num2, operator));
  return [question, answerCorrect];
};

const startGame = () => playGame(getQuestionAndAnswerCorrect, description);

export default startGame;
