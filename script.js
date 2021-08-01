'use strict';

// console.log(document.querySelector('.message'));

/* document.querySelector('.number').textContent = 23;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

// document.querySelector('.guess').value = 23;

let score = 20;

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.message').textContent = 'You lost the game';
    }
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too High!';
    document.querySelector('.score').textContent = score;
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.message').textContent = 'You lost the game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //score reset
  score = 20;
  document.querySelector('.score').textContent = '20';

  //secret number reset
  const secretNumber = Math.trunc(Math.random() * 20) + 1;

  //body background color reset
  document.querySelector('body').style.backgroundColor = '#222';

  //guess value reset
  document.querySelector('.guess').value = '';

  //secret number reset to question mark
  document.querySelector('.number').textContent = '?';

  //secret number element width reset to its original width
  document.querySelector('.number').style.width = '15rem';

  //message reset
  document.querySelector('.message').textContent = 'Start guessing...';
});
