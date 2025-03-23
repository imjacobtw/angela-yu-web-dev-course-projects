function rollDice() {
  return Math.ceil(Math.random() * 6);
}

function setDiceImage(imgElementClass, playerDiceRoll) {
  document
    .querySelector(imgElementClass)
    .setAttribute("src", `./images/dice${playerDiceRoll}.png`);
}

const player1DiceRoll = rollDice();
const player2DiceRoll = rollDice();
setDiceImage(".img1", player1DiceRoll);
setDiceImage(".img2", player2DiceRoll);
let headingText;

if (player1DiceRoll > player2DiceRoll) {
  headingText = "🚩 Player 1 Wins!";
} else if (player1DiceRoll < player2DiceRoll) {
  headingText = "Player 2 Wins! 🚩";
} else {
  headingText = "Draw!";
}

document.querySelector("h1").textContent = headingText;
