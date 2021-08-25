const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const showResult = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const pScore = document.getElementById('player-score');
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
    }));

function randomComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 5);
    if (randomNumber === 0) {
      computerChoice = 'rock';
    }
    if (randomNumber === 1) {
      computerChoice = 'scissors';
    }
    if (randomNumber === 2) {
      computerChoice = 'paper';
    }
    if (randomNumber === 3) {
      computerChoice = 'spock';
    }
    if (randomNumber === 4) {
      computerChoice = 'lizard';
    }
computerChoiceDisplay.innerHTML = computerChoice
    }
    
const getResult = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'scissorslizard':
        case 'rockscissors':
        case 'rocklizard':
        case 'paperrock':
        case 'paperspock':
        case 'spockrock':
        case 'spockscissors':
        case 'lizardspock':
        case 'lizardpaper':  
        showResult.innerHTML = 'You win!';
        break;
        case 'scissorsrock':
        case 'scissorsspock':
        case 'rockpaper':
        case 'rockspock':
        case 'paperscissors':
        case 'paperlizard':
        case 'spockpaper':
        case 'spocklizard':
        case 'lizardrock':
        case 'lizardscissors':  
        showResult.innerHTML = 'You lose!';
        break;
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
        case 'spockspock':
        case 'lizardlizard':  
        showResult.innerHTML = 'Draw!';
        break;
    }
};

function scoreBoard(getResults) {
    if (showResult.innerHTML === 'You win!') {
      playerScore++;
      pScore.innerText = playerScore;
      cScore.innerText = computerScore;
    } else if (showResult.innerHTML === 'You lose!') {
      computerScore++;
      pScore.innerText = playerScore;
      cScore.innerText = computerScore;
    } else {
      return false;
    }
    }