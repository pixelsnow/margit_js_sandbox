const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const body = document.querySelector("body");
const dirs = document.querySelectorAll('input[name="dir"]');
const css = document.querySelector("#css");
let dir = "bottom";
let c1 = "#98ecc0";
let c2 = "#9e7cee";

const updateBackground = () => {
  document.body.style.background = `linear-gradient(to ${dir}, ${c1}, ${c2}) no-repeat fixed
    center center/cover`;
  css.textContent = `linear-gradient(to ${dir}, ${c1}, ${c2});`;
};

color1.addEventListener("input", () => {
  c1 = color1.value;
  updateBackground();
});

color2.addEventListener("input", () => {
  c2 = color2.value;
  updateBackground();
});

dirs.forEach((direction) =>
  direction.addEventListener("change", () => {
    dir = direction.value;
    updateBackground();
  })
);

color1.value = c1;
color2.value = c2;
updateBackground();