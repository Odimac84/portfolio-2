const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const showResult = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const pScore = document.getElementById('p-score');
const cScore = document.getElementById('computer-score');
let userChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    playerChoiceDisplay.innerHTML = userChoice;
    randomComputerChoice();
    getResult();
    scoreBoard(getResult);
    }))

function randomComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 5)
    if (randomNumber === 0) {
      computerChoice = 'rock'
    }
    if (randomNumber === 1) {
      computerChoice = 'scissors'
    }
    if (randomNumber === 2) {
      computerChoice = 'paper'
    }
    if (randomNumber === 3) {
      computerChoice = 'spock'
    }
    if (randomNumber === 4) {
      computerChoice = 'lizard'
    }
computerChoiceDisplay.innerHTML = computerChoice
    }