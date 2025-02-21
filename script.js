$(document).ready(function () {
  $(".hamburger").click(() => {
    $(".ul-one, .ul-two").slideToggle("slow");
  });
});
const icon = document.querySelector(".icon");
const pages = document.querySelectorAll(".page");
const shift = document.querySelector(".shift");
const buttons = document.querySelectorAll("button");
const backs = document.querySelectorAll("section");
const aI = document.querySelectorAll(".about-icon");
const feedback = document.querySelector(".feedback");
const bright = document.querySelector(".bright");
const nav = document.querySelectorAll(".nav");
let pLen = pages.length;
function slideMove(clickSlide) {
  pages.forEach((page, i) => {
    page.style.transform = `translateX(${100 * (i - clickSlide)}%)`;
  });
}
slideMove(0);
let clickSlide = 0;
function iconClick() {
  icon.addEventListener("click", () => {
    if (clickSlide == pLen - 1) {
      clickSlide = 0;
    } else {
      clickSlide++;
    }
    slideMove(clickSlide);
    setInterval(slideMove, 3000);
  });
}
iconClick();

function background() {
  shift.addEventListener("click", () => {
    bright.classList.toggle("active");

    buttons.forEach((button) => {
      button.classList.toggle("bg-dark");
    });
    backs.forEach((back) => {
      back.classList.toggle("bg-dark");
    });
  });
}
background();
aI.forEach((aicons) => {
  aicons.addEventListener("click", () => {
    feedback.classList.toggle("active");
  });
});
