// Variables

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById('btn');

let c;

// Script

function changeColor() {
  c = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[c];
}

button.addEventListener('click', changeColor, false);