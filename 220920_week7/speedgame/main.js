const startBtn = document.querySelector("#start");
const circles = document.querySelectorAll(".circle");
const stopBtn = document.querySelector("#stop");

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    console.log(`${circle.id} clicked`);
  });
});

const startGame = () => {
  console.log("game started");
};
startBtn.addEventListener("click", startGame);
