#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const getRandom = (min, max) => {
  const minRound = Math.ceil(min);
  const maxRound = Math.floor(max);
  return Math.floor(Math.random() * (maxRound - minRound + 1)) + minRound;
};

const even = (num) => num % 2 === 0;

let i = 1;

console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (i <= 3) {
  const num = getRandom(1, 20);
  const answerCorrect = even(num) ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${num}\nYour answer: `);

  if (answer === answerCorrect) {
    console.log('Correct!');
    i += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerCorrect}'. \nLet's try again, ${userName}!`);
    break;
  }
  if (i === 4) console.log(`Congratulations, ${userName}!`);
}
