const shifts = document.querySelectorAll(".shift");
const buttons = document.querySelectorAll("button");
const backs = document.querySelectorAll("section");
const aI = document.querySelectorAll(".about-icon");
const feedback = document.querySelector(".feedback");
const bright = document.querySelector(".bright");

shifts.forEach((shift) => {
  shift.addEventListener("click", () => {
    bright.classList.toggle("active");

    buttons.forEach((button) => {
      button.classList.toggle("bg-dark");
    });
    backs.forEach((back) => {
      back.classList.toggle("bg-dark");
    });
  });
});

aI.forEach((aicons) => {
  aicons.addEventListener("click", () => {
    feedback.classList.toggle("active");
  });
});
