const form = document.querySelector("#bg_generator");

let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let direction = document.querySelectorAll('input[name="direction"]');

let text = document.querySelector("p");

const setGradient = (event) => {
  event.preventDefault();
  let selectedValue;
  for (const sel of direction) {
    if (sel.checked) {
      selectedValue = sel.value;
    }
  }

  let gradient = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;

  document.body.style.backgroundImage = gradient;
  text.textContent = gradient + ";";
};

form.addEventListener("change", setGradient);
