"use strict";
const score0 = document.getElementById("score_0");
const score1 = document.getElementById("score_1");
const current0 = document.getElementById("value_0");
const current1 = document.getElementById("value_1");
const player1 = document.getElementById("player_0");
const player2 = document.getElementById("player_1");
const diceImg = document.querySelector(".diceImg");
const newgame_btn = document.querySelector(".newgame_btn");
const roll_btn = document.querySelector(".roll_btn");
const hold_btn = document.querySelector(".hold_btn");
const activePlayer = document.querySelector(".activePlayer");
const winnerText = document.querySelector(".winnerText");

const displayLoaded = () => {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  diceImg.classList.add("d-none");
};

document.addEventListener("DOMContentLoaded", displayLoaded);

newgame_btn.addEventListener("click", () => {
  displayLoaded();
  roll_btn.removeAttribute("disabled", "disabled");
  scoreValue = [0, 0];
  currentScore = 0;
});

// Main Variables
let currentScore = 0;
let activePlayerCheck = 0;
let scoreValue = [0, 0];

roll_btn.addEventListener("click", () => {
  let randomDice = Math.trunc(Math.random() * 6) + 1;
  //   console.log(randomDice);
  diceImg.classList.remove("d-none");
  diceImg.src = `/imgs/${randomDice}.png`;

  if (randomDice !== 1) {
    currentScore += randomDice;
    document.getElementById(`value_${activePlayerCheck}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

hold_btn.addEventListener("click", () => {
  scoreValue[activePlayerCheck] += currentScore;
  document.getElementById(`score_${activePlayerCheck}`).textContent =
    scoreValue[activePlayerCheck];
  if (scoreValue[activePlayerCheck] >= 30) {
    console.log(
      alert(`Player ${activePlayerCheck + 1} is a winner!!! Play a new game.`)
    );
    roll_btn.setAttribute("disabled", "disabled");
  }
  switchPlayer();
});

const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`value_${activePlayerCheck}`).textContent =
    currentScore;
  document
    .getElementById(`player_${activePlayerCheck}`)
    .classList.remove("activePlayer");
  activePlayerCheck = activePlayerCheck === 0 ? 1 : 0;
  document
    .getElementById(`player_${activePlayerCheck}`)
    .classList.add("activePlayer");
};
