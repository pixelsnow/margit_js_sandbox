const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    console.log(`${circle.id} clicked`);
  });
});

const startGame = () => {
  console.log("game started");
};

const endGame = () => {
  console.log("game ended");
};

startBtn.addEventListener("click", startGame);
stopBtn.addEventListener("click", endGame);
