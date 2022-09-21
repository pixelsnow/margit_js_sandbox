const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const circles = document.querySelectorAll(".circle");
const score = document.querySelector("#score");
const resScore = document.querySelector("#result-score");
const modal = document.querySelector(".overlay");
const closeBtn = document.querySelector(".modal .close");

let prev = -1;
let notOver = true;
let clicked = true;

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    console.log(`${circle.id} clicked`);
    if (circle.classList.contains("active")) {
      score.textContent = +score.textContent + 1;
      clicked = true;
    } else endGame();
  });
});

const getRand = () => {
  return Math.floor(Math.random() * 4);
};

const nextCircle = () => {
  let newCircle;
  do {
    newCircle = getRand();
  } while (prev === newCircle);
  return newCircle;
};

const activateCircle = () => {
  // Deactivating all circles
  circles.forEach((circle) => circle.classList.remove("active"));
  const next = nextCircle(); // Getting the index for the next circle
  console.log(`next circle is ${next}`);
  circles[next].classList.add("active"); // Activating the circle
  prev = next; // Remembering the circle in order to avoid repeatition
  if (!clicked) {
    console.log("circle wasn't clicked, game over");
    notOver = false;
    endGame();
  }
  clicked = false;
};

/* const loopTimeout = (delay) => {
  setTimeout(() => {
    activateCircle();
  }, delay).then(() => loopTimeout(delay - 10));
}; */

const startGame = () => {
  console.log("game started");
  stopBtn.classList.remove("hidden"); // Switching buttons
  startBtn.classList.add("hidden");
  activateCircle(); // Activating first circle
  /* loopTimeout(1000); */
  let delay = 1000; // Setting the delay
  for (let i = 1; i < 10; i++) {
    setTimeout(activateCircle, delay * i);
    if (!notOver) break;
  }
};

const endGame = () => {
  console.log("game ended");
  circles.forEach((circle) => circle.classList.remove("active"));
  stopBtn.classList.add("hidden");
  startBtn.classList.remove("hidden");
  modal.classList.remove("hidden");
  notOver = false;
  prev = -1;
  resScore.textContent = score.textContent;
  score.textContent = 0;
};

const closeModal = () => {
  modal.classList.add("hidden");
  console.log("modal closed");
};

startBtn.addEventListener("click", startGame);
stopBtn.addEventListener("click", endGame);
closeBtn.addEventListener("click", closeModal);
