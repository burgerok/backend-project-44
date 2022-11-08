import readlineSync from 'readline-sync';

const roundQuantity = 3;

const playGame = (getQuestionAndAnswerCorrect, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  let i = 1;
  while (i <= roundQuantity) {
    const [question, answerCorrect] = getQuestionAndAnswerCorrect();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer === answerCorrect) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerCorrect}'. \nLet's try again, ${userName}!`);
      break;
    }
    if (i === 4) console.log(`Congratulations, ${userName}!`);
  }
};

export default playGame;
