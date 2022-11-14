import readlineSync from 'readline-sync';

const roundQuantity = 3;

const playGame = (getQuestionAndAnswerCorrect, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < roundQuantity; i += 1) {
    const [question, answerCorrect] = getQuestionAndAnswerCorrect();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== answerCorrect) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerCorrect}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
