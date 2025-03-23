const drumAudios = {
  w: new Audio("./sounds/tom-1.mp3"),
  a: new Audio("./sounds/tom-2.mp3"),
  s: new Audio("./sounds/tom-3.mp3"),
  d: new Audio("./sounds/tom-4.mp3"),
  j: new Audio("./sounds/snare.mp3"),
  k: new Audio("./sounds/crash.mp3"),
  l: new Audio("./sounds/kick-bass.mp3"),
};

for (const button of document.querySelectorAll("button")) {
  button.addEventListener("click", function () {
    const keyPressed = this.innerHTML;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
  });
}

document.addEventListener("keydown", (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  drumAudios[key]?.play();
}

function buttonAnimation(key) {
  const activeButton = document.querySelector(`.${key}`);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
