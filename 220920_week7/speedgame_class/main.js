const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const circles = document.querySelectorAll(".circle");
const score = document.querySelector("#score");
const resScore = document.querySelector("#result-score");
const modal = document.querySelector(".overlay");
const closeBtn = document.querySelector(".modal .close");
const displayLives = document.querySelector("#lives");
const resultMsg = document.querySelector("#result");
const resultMsg2 = document.querySelector("#result2");

let timer;
let active = 0;
let pace = 1000;
let lives = 3;
let clickedCorrect = true;
let bugSound;

const renderLives = () => {
  let res = "";
  for (let i = 0; i < lives; i++)
    res += '<span class="material-symbols-outlined">bug_report</span>';
  displayLives.innerHTML = res;
};

const playSound = (i) => {
  let sound;
  if (i === 0) sound = new Audio("src/crack5.mp3");
  else if (i === 1) sound = new Audio("src/popcorn1.mp3");
  else if (i === 2) sound = new Audio("src/crack4.mp3");
  else sound = new Audio("src/slime_cut.mp3");
  sound.play();
};

const clickCircle = (i) => {
  if (i === active) {
    playSound(i);
    // If clicked correct and for the first time, increase score
    if (!clickedCorrect) score.textContent = +score.textContent + 1;
    clickedCorrect = true; // Toggle the clicked flag
  } else {
    lives--;
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
  if (!clickedCorrect) {
    lives--;
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

const clickStart = () => {
  const sound = new Audio("src/click1.mp3");
  stopBtn.classList.remove("hidden"); // Switching buttons
  startBtn.classList.add("hidden");
  circles.forEach((circle) => (circle.style.pointerEvents = "auto"));
  sound.play();
  startGame();
};

const renderResult = () => {
  resScore.textContent = score.textContent;
  if (score.textContent < 5) {
    resultMsg.textContent = `didn't even try did ya`;
    resultMsg2.textContent = `your house has been taken over by crawlies`;
  } else if (score.textContent < 25) {
    resultMsg.textContent = `you tried.`;
    resultMsg2.textContent = `your house is clear for now`;
  } else if (score.textContent < 50) {
    resultMsg.textContent = `we got a professional exterminator in the house, huh`;
    resultMsg2.textContent = `GOT THEM`;
  } else resultMsg.textContent = `hello bot`;
};

const endGame = () => {
  const sound = new Audio("src/spook2.mp3");
  clearTimeout(timer);
  modal.classList.remove("hidden"); // Triggering modal
  renderResult();
  sound.play();
};

const resetGame = () => {
  window.location.reload();
};

startBtn.addEventListener("click", clickStart);
stopBtn.addEventListener("click", endGame);
closeBtn.addEventListener("click", resetGame);

renderLives();
