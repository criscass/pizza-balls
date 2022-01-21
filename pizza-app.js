"use strict";

const plusBtn = document.querySelector(".plus-icon");
const minusBtn = document.querySelector(".minus-icon");
const ballsNumberText = document.querySelector(".ballsNumberText");
const flour = document.querySelector(".flour");
const water = document.querySelector(".water");
const salt = document.querySelector(".salt");
const yeast = document.querySelector(".yeast");

const outputUpdate = function () {
  flour.textContent = ballsNumber * 145;
  water.textContent = ballsNumber * 84;
  salt.textContent = ballsNumber * 4;
  yeast.textContent = ballsNumber * 0.5;
};

function removeTransition(e) {
  this.classList.remove("pressed");
}

let ballsNumber = 6;

plusBtn.addEventListener("click", function () {
  plusBtn.classList.add("pressed");
  ballsNumber++;
  ballsNumberText.textContent = ballsNumber;
  outputUpdate();
});

plusBtn.addEventListener("transitionend", removeTransition);

minusBtn.addEventListener("click", function () {
  minusBtn.classList.add("pressed");
  ballsNumber--;
  ballsNumberText.textContent = ballsNumber;
  outputUpdate();
});

minusBtn.addEventListener("transitionend", removeTransition);
