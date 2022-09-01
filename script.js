'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMesssage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  number = Math.trunc(Math.random() * 20) + 1;
  displayMesssage('start guessing...');
  Document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMesssage('❌ no number!!');
  } else if (guess === number) {
    displayMesssage('🎉 yeey you guessed it');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 0) {
      displayMesssage(
        guess > number ? '  you guessed it high ❌' : 'to low ❌ '
      );

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMesssage('you lost the game boo!!!');

      document.querySelector('.score').textContent = 0;
    }
  }
});
