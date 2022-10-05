const form = document.querySelector("form");
const username = document.querySelector("#name");
const age = document.querySelector("#age");
const health = document.querySelectorAll(".health");
const habits = document.querySelectorAll(".habits");
const result = document.querySelector("#result");

const calcScore = (e) => {
  e.preventDefault();

  console.log(username.value);

  let res = 500;
  let increase = 0;
  if (age.value >= 18) increase += 10;
  if (age.value >= 26) increase += 20;
  if (age.value >= 36) increase += 30;
  if (age.value >= 46) increase += 40;
  if (age.value >= 56) increase += 50;
  if (age.value >= 66) increase += 60;
  res += res * increase * 0.01;

  increase = 0;
  health.forEach((item) => {
    if (item.checked) increase++;
  });
  res += res * increase * 0.01;

  increase = 0;
  habits.forEach((item) => {
    if (item.checked) {
      if (item.value === "good") increase -= 5;
      else if (item.value === "bad") increase += 5;
    }
  });
  res += res * increase * 0.01;

  document.querySelector(".result_container").style.borderWidth = "1px";
  document.querySelector("#result").textContent = `${username.value},
    your result is ${res.toFixed(0)}`;
  form.reset();
};

form.addEventListener("submit", calcScore);
