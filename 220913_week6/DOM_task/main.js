const header = document.querySelector("header");
const top_button = document.querySelector("#top");
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector(".navbar");
const links = document.querySelectorAll(".main-menu li");

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

const mobMenu = () => {
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = ""; /* stopping background scrolling */
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

hamburger.addEventListener("click", mobMenu);

for (const link of links) {
  link.addEventListener("click", mobMenu);
}
