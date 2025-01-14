const shifts = document.querySelectorAll(".shift");
const buttons = document.querySelectorAll("button");
const backs = document.querySelectorAll("section");
const aI = document.querySelectorAll(".about-icon");
const feedback = document.querySelector(".feedback");
const nav = document.querySelector(".nav-bar");

shifts.forEach((shift) => {
  shift.addEventListener("click", () => {
    nav.classList.toggle("active");

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
