// Variables

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById('btn');

const display = document.getElementById('display');

let c;

// Script

function changeColor() {
  c = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[c];
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerHTML = "Background Color: " + colors[c];
}

button.addEventListener('click', changeColor, false);