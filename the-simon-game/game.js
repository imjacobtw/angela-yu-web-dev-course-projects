const buttonColors = ["red", "blue", "green", "yellow"];
const audios = {
  red: new Audio("./sounds/red.mp3"),
  blue: new Audio("./sounds/blue.mp3"),
  green: new Audio("./sounds/green.mp3"),
  yellow: new Audio("./sounds/yellow.mp3"),
  wrong: new Audio("./sounds/wrong.mp3"),
};
let gamePattern = [];
let userPattern = [];
let isGameRunning = false;
let level = 0;

$(document).keydown(() => {
  if (!isGameRunning) {
    isGameRunning = true;
    nextSequence();
  }
});

$(".btn").click(function () {
  const userChosenColor = this.getAttribute("id");
  userPattern.push(userChosenColor);
  animatePress(userChosenColor);
  playSound(userChosenColor);
  checkAnswer();
});

function nextSequence() {
  userPattern = [];
  const randomNumber = Math.floor(Math.random() * buttonColors.length);
  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  animatePress(randomChosenColor);
  playSound(randomChosenColor);
  level += 1;
  $("h1").text(`Level ${level}`);
}

function playSound(name) {
  audios[name].play();
}

function animatePress(currentColor) {
  const currentButton = $(`#${currentColor}`);
  currentButton.addClass("pressed");
  setTimeout(() => currentButton.removeClass("pressed"), 100);
}

function checkAnswer() {
  const lastAnswerIndex = userPattern.length - 1;

  if (userPattern[lastAnswerIndex] !== gamePattern[lastAnswerIndex]) {
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(() => $("body").removeClass("game-over"), 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
    return;
  }

  if (userPattern.length === gamePattern.length) {
    setTimeout(nextSequence, 1000);
  }
}

function startOver() {
  gamePattern = [];
  isGameRunning = false;
  level = 0;
}
