const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const circles = document.querySelectorAll(".circle");
const score = document.querySelector("#score");
const resScore = document.querySelector("#result-score");
const modal = document.querySelector(".overlay");
const closeBtn = document.querySelector(".modal .close");
const displayLives = document.querySelector("#lives");

let timer;
let active = 0;
let pace = 1000;
let lives = 3;
let clickedCorrect = true;

const renderLives = () => {
  let res = "";
  for (let i = 0; i < lives; i++)
    res += '<span class="material-symbols-outlined">bug_report</span>';
  displayLives.innerHTML = res;
};

const clickCircle = (i) => {
  console.log(`${i} clicked`);
  if (i === active) {
    // If clicked correct
    score.textContent = +score.textContent + 1; // Increase score
    clickedCorrect = true; // Toggle the clicked flag
  } else {
    lives--;
    console.log("lives left: ", lives);
    if (!lives) endGame();
  }
};

circles.forEach((circle, i) => {
  circle.addEventListener("click", () => clickCircle(i));
});

const nextCircle = (prev) => {
  let newCircle;
  do {
    // Getting a new random number until there's no repetition
    newCircle = Math.floor(Math.random() * 4);
  } while (prev === newCircle);
  return newCircle;
};

const startGame = () => {
  stopBtn.classList.remove("hidden"); // Switching buttons
  startBtn.classList.add("hidden");
  if (!clickedCorrect) {
    lives--;
    console.log("lives left: ", lives);
  }
  renderLives();
  if (!lives) return endGame(); // Ending game if out of lives
  const next = nextCircle(active); // Activating the next circle
  circles[active].classList.remove("active");
  circles[next].classList.add("active");
  active = next;
  clickedCorrect = false; // Resetting click flag
  timer = setTimeout(startGame, pace); // Timeout
  pace -= 10;
};

const endGame = () => {
  clearTimeout(timer);
  modal.classList.remove("hidden"); // Triggering modal
  resScore.textContent = score.textContent;
};

const resetGame = () => {
  window.location.reload();
};

startBtn.addEventListener("click", startGame);
stopBtn.addEventListener("click", endGame);
closeBtn.addEventListener("click", resetGame);
