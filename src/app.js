/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["My cat", "My mom", "The neighbours", "My rat"];
let action = ["threw up on", "pooped on", "smashed", "stole"];
let what = ["my clothes", "my computer ", "my homework", "my documents"];
let when = [
  "before the meeting",
  "when I was sleeping",
  "while I was exercising",
  "during my break",
  "while I was taking an exam"
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max - min + min);
}

function getRandom(anyArray) {
  let max = anyArray.length - 1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector('#btn').addEventListener("click" , () =>)
  document.querySelector("#excuse").innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
};
