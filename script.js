'use strict';

// Triangle with canvas
// let tri = document.querySelector('#btn2').getContext('2d');

// tri.fillStyle = 'red'
// tri.beginPath();
// tri.moveTo(150, 50);
// tri.lineTo(50, 250);
// tri.lineTo(250, 250);
// tri.fill();

// Computer selection
let computerPlay = function () {
  const names = ['Rock', 'Paper', 'Scissors'];
  return names[Math.floor(Math.random() * names.length)];
};

const playRound = function (playerSelection, computerSelection) {

  // My Code Game
  if (computerSelection === 'Rock' && playerSelection === 'rock') {
    return ("It's a tie ");
  } else if (computerSelection === 'Rock' && playerSelection === 'paper') {
    ++playerScore;
    return 'You Win! Paper beats Rock';
  } else if (computerSelection === 'Rock' && playerSelection === 'scissors') {
    ++computerScore;
    return 'You lose! Rock beats Scissors';
  } else if (computerSelection === 'Paper' && playerSelection === 'rock') {
    ++computerScore;
    return 'You Lose! Paper beats Rock';
  } else if (computerSelection === 'Paper' && playerSelection === 'paper') {
    return "It's a tie ";
  } else if (computerSelection === 'Paper' && playerSelection === 'scissors') {
    ++playerScore;
    return 'You Win! Scissors beats Paper';
  } else if (computerSelection === 'Scissors' && playerSelection === 'rock') {
    ++playerScore;
    return 'You Win! Rock beats Scissors';
  } else if (computerSelection === 'Scissors' && playerSelection === 'paper') {
    ++computerScore;
    return 'You Lose! Scissors beats Paper';
  } else if (computerSelection === 'Scissors' && playerSelection === 'scissors') {
    return "It's a tie ";
  } else {
    return 'Something is wrong!';
  }
  
};

// Create 3 bottons

let playerScore = 0;
let computerScore = 0;
let result = 0;

const winning = function () {
  if (playerScore === 5) {
    document.querySelector('.winner').textContent = '----- You Win the Match!! 😁 -----';
  }
  
  if (computerScore === 5) {
    document.querySelector('.winner').textContent = '------ Computer Win ------  😕';
  }
}

// Rock selection
document.querySelector('.btn').addEventListener('click', function() {
  let rock = 'rock';
  computerPlay = function () {
    const names = ['Rock', 'Paper', 'Scissors'];
    return names[Math.floor(Math.random() * names.length)];
  };
  let computerSelection = computerPlay();

  // Displaying rock results on the page
  document.querySelector('.round').textContent = playRound(rock, computerSelection);
  document.querySelector('.result').textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;

  winning();
  
});

// Paper selection

document.querySelector('.btn2').addEventListener('click', function() {
  let paper = 'paper';
  computerPlay = function () {
    const names = ['Rock', 'Paper', 'Scissors'];
    return names[Math.floor(Math.random() * names.length)];
  };
  let computerSelection = computerPlay();
  // console.log(playRound(paper, computerSelection));
  // console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);

  // Displaying paper results on the page
  document.querySelector('.round').textContent = playRound(paper, computerSelection);
  document.querySelector('.result').textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;

 winning();
});

// Scissors selection

document.querySelector('.btn3').addEventListener('click', function() {
  let scissors = 'scissors';
  computerPlay = function () {
    const names = ['Rock', 'Paper', 'Scissors'];
    return names[Math.floor(Math.random() * names.length)];
  };
  let computerSelection = computerPlay();
  // console.log(playRound(scissors, computerSelection));
  // console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);

  // Displaying scissors results on the page
  document.querySelector('.round').textContent = playRound(scissors, computerSelection);
  document.querySelector('.result').textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;

  winning();
});

