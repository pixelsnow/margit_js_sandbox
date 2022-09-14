const header = document.querySelector("header");
const top_button = document.querySelector("#top");
const hamburger = document.querySelector("#hamburger");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("bg");
    top_button.style.display = "block";
  } else {
    header.classList.remove("bg");
    top_button.style.display = "none";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

top.addEventListener("click", getToTop);

const mobMenu = () => {};

hamburger.addEventListener("click", mobMenu);
