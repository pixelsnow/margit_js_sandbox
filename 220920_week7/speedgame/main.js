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
      // If clicked correct
      score.textContent = +score.textContent + 1; // Increase score
      clicked = true; // Toggle the clicked flag
    } else {
      endGame();
    }
  });
});

const nextCircle = () => {
  let newCircle;
  do {
    // Getting a new random number until there's no repetition
    newCircle = Math.floor(Math.random() * 4);
  } while (prev === newCircle);
  return newCircle;
};

const activateCircle = () => {
  if (!clicked) {
    // Checking if the previous circle was clicked
    console.log("circle wasn't clicked, game over");
    notOver = false;
    endGame();
  } else {
    // Deactivating all circles
    circles.forEach((circle) => circle.classList.remove("active"));
    const next = nextCircle(); // Getting the index for the next circle
    console.log(`next circle is set to ${next}`);
    circles[next].classList.add("active"); // Activating the circle
    prev = next; // Remembering the circle in order to avoid repeatition
    clicked = false; // Resetting the clicked flag
  }
};

const loopTimeout = (delay) => {
  if (!notOver) return;
  else {
    setTimeout(() => {
      console.log(`activating a circle with delay of ${delay}`);
      activateCircle();
      return loopTimeout(delay - 10);
    }, delay);
  }
};

const startGame = () => {
  clicked = true;
  notOver = true;
  prev = -1;
  console.log("game started");
  stopBtn.classList.remove("hidden"); // Switching buttons
  startBtn.classList.add("hidden");
  activateCircle(); // Activating first circle
  if (notOver) {
    console.log("not over");
    loopTimeout(1000);
  }
};

const endGame = () => {
  console.log("game ended");
  // Deactivating all circles
  notOver = false;
  circles.forEach((circle) => circle.classList.remove("active"));
  stopBtn.classList.add("hidden"); // Switching buttons
  startBtn.classList.remove("hidden");
  modal.classList.remove("hidden"); // Triggering modal
  resScore.textContent = score.textContent;
};

const closeModal = () => {
  modal.classList.add("hidden");
  score.textContent = "0";
  console.log("modal closed");
};

startBtn.addEventListener("click", startGame);
stopBtn.addEventListener("click", endGame);
closeBtn.addEventListener("click", closeModal);
