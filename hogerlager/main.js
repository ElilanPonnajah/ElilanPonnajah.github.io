console.log("Main loaded");

// hier staan alle credits op voor de punten
let computerCredits = 29;
let playerCredits = 29;
let playerTotal;
let comTotal;
let playerDiceOne;
let playerDiceTwo;
let computerDiceOne;
let computerDiceTwo;

//hier pak ik alle html classes op
const comScore = document.querySelector(".computer-credits");
comScore.textContent = computerCredits;
const playerScore = document.querySelector(".player-credits");
playerScore.textContent = playerCredits;
const playerDiceDisplayOne = document.querySelector(".player-dice-one");
const playerDiceDisplayTwo = document.querySelector(".player-dice-two");
const computerDiceDisplayOne = document.querySelector(".computer-dice-one");
const computerDiceDisplayTwo = document.querySelector(".computer-dice-two");
const messageBox = document.querySelector(".message-box");
const resetButton = document.querySelector(".reset"); 
resetButton.addEventListener('click', resetGame)
messageBox.textContent = "klik op gooi dobbelsteen om te beginnen";
resetButton.disabled = true
//hier komen alle buttons te staan
const diceButton = document.querySelector(".dice-button");
diceButton.addEventListener("click", diceFunction);
const higherButton = document.querySelector(".higher-button");
higherButton.addEventListener("click", higherFunction);
const lowerButton = document.querySelector(".lower-button");
lowerButton.addEventListener("click", lowerFunction);
const drawButton = document.querySelector(".draw-button");
drawButton.addEventListener("click", drawFunction);

// hier disable ik de buttons in de begin
higherButton.disabled = true;
lowerButton.disabled = true;
drawButton.disabled = true;
diceButton.disabled = false;

//hier komt de gooi dobbelsteen functie te staan
function diceFunction() {
  computerDiceOne = Math.floor(Math.random() * 6) + 1;
  computerDiceDisplayOne.textContent = computerDiceOne;
  computerDiceTwo = Math.floor(Math.random() * 6) + 1;
  computerDiceDisplayTwo.textContent = computerDiceTwo;

  comTotal = computerDiceOne + computerDiceTwo;
  console.log(comTotal);

  higherButton.disabled = false;
  lowerButton.disabled = false;
  drawButton.disabled = false;
  diceButton.disabled = true;
}

// hier komt de hoger functie te staan 
function higherFunction() {
  playerDiceOne = Math.floor(Math.random() * 6) + 1;
  playerDiceDisplayOne.textContent = playerDiceOne;
  playerDiceTwo = Math.floor(Math.random() * 6) + 1;
  playerDiceDisplayTwo.textContent = playerDiceTwo;

  playerTotal = playerDiceOne + playerDiceTwo;
  console.log(playerTotal);

  higherButton.disabled = true;
  lowerButton.disabled = true;
  drawButton.disabled = true;
  diceButton.disabled = false;

  if (playerTotal > comTotal) {
    console.log("You win");
    playerCredits = playerCredits + 2;
    computerCredits = computerCredits - 1;
    messageBox.textContent = "You win";
  } else if (playerTotal < comTotal) {
    console.log("You lose");
    computerCredits = computerCredits + 2;
    playerCredits = playerCredits - 1;
    messageBox.textContent = "You lose";
  } else if ((playerTotal = comTotal)) {
    console.log("Draw");
    messageBox.textContent = "Draw";
  }

  playerScore.textContent = playerCredits;
  comScore.textContent = computerCredits;
  gameResetFunction();
}

// hier komt de lager functie te staan
function lowerFunction() {
  playerDiceOne = Math.floor(Math.random() * 6) + 1;
  playerDiceDisplayOne.textContent = playerDiceOne;
  playerDiceTwo = Math.floor(Math.random() * 6) + 1;
  playerDiceDisplayTwo.textContent = playerDiceTwo;

  playerTotal = playerDiceOne + playerDiceTwo;
  console.log(playerTotal);

  higherButton.disabled = true;
  lowerButton.disabled = true;
  drawButton.disabled = true;
  diceButton.disabled = false;

  if (playerTotal < comTotal) {
    console.log("u win");
    messageBox.textContent = "You win";
    playerCredits = playerCredits + 2;
    computerCredits = computerCredits - 1;
  } else if (playerTotal > comTotal) {
    console.log("You lose");
    computerCredits = computerCredits + 2;
    playerCredits = playerCredits - 1;
    messageBox.textContent = "You lose";
  } else if ((playerTotal = comTotal)) {
    console.log("Draw");
    messageBox.textContent = "Draw";
  }

  playerScore.textContent = playerCredits;
  comScore.textContent = computerCredits;
  gameResetFunction();
}

// hier komt de draw functie te staan 
function drawFunction() {
  playerDiceOne = Math.floor(Math.random() * 6) + 1;
  playerDiceDisplayOne.textContent = playerDiceOne;
  playerDiceTwo = Math.floor(Math.random() * 6) + 1;
  playerDiceDisplayTwo.textContent = playerDiceTwo;

  playerTotal = playerDiceOne + playerDiceTwo;
  console.log(playerTotal);

  higherButton.disabled = true;
  lowerButton.disabled = true;
  drawButton.disabled = true;
  diceButton.disabled = false;

  if (playerTotal === comTotal) {
    console.log("u win");
    messageBox.textContent = "You win";
    playerCredits = playerCredits + 4;
    computerCredits = computerCredits - 2;
  } else if (playerTotal < comTotal) {
    console.log("u lose");
    messageBox.textContent = "You lose";
    playerCredits = playerCredits - 2;
    computerCredits = computerCredits + 4;
  } else if (playerTotal > comTotal) {
    console.log("You lose");
    messageBox.textContent = "You lose";
    playerCredits = playerCredits - 2;
    computerCredits = computerCredits + 4;
  }

  playerScore.textContent = playerCredits;
  comScore.textContent = computerCredits;
  gameResetFunction();
}

// hier zorg ik ervoor dat de game reset als het een bepaald punt aantal aantikt
function gameResetFunction() {
  if (playerCredits >= 30) {
    higherButton.disabled = true;
    lowerButton.disabled = true;
    drawButton.disabled = true;
    diceButton.disabled = true;
    messageBox.textContent = "You beat the computer, Play again?"
    resetButton.disabled = false
  } else if (computerCredits >= 30) {
    higherButton.disabled = true;
    lowerButton.disabled = true;
    drawButton.disabled = true;
    diceButton.disabled = true;
    messageBox.textContent = "You lost against the computer, Play again?"
    resetButton.disabled = false
  } else if (playerCredits <= 0) {
    higherButton.disabled = true;
    lowerButton.disabled = true;
    drawButton.disabled = true;
    diceButton.disabled = true;
    messageBox.textContent = "You lost, Play again?"
    resetButton.disabled = false
  } else if (computerCredits <= 0) {
    higherButton.disabled = true;
    lowerButton.disabled = true;
    drawButton.disabled = true;
    diceButton.disabled = true;
    messageBox.textContent = "You won, Play again?"
    resetButton.disabled = false
  }
}

function resetGame(){
  location.reload();
  
}


