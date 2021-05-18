// Variables

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById('btn');

const display = document.getElementById('display');

// let h1, h2, h3, h4, h5, h6;
let h;

let i;

let setColor;

// Script

function randomColor() {
  h1 = hex[Math.floor(Math.random() * hex.length)];
  h2 = hex[Math.floor(Math.random() * hex.length)];
  h3 = hex[Math.floor(Math.random() * hex.length)];
  h4 = hex[Math.floor(Math.random() * hex.length)];
  h5 = hex[Math.floor(Math.random() * hex.length)];
  h6 = hex[Math.floor(Math.random() * hex.length)];

  setColor = '#'.concat(h1,h2,h3,h4,h5,h6);

  // for(i=0; i<hex.length; i++){
  //   setColor = '';
  //   h = Math.floor(Math.random() * hex.length);
  //   setColor = setColor.concat(hex[h]);
  // }

  document.body.style.backgroundColor = setColor;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerHTML = "Background Color: " + setColor;
}

button.addEventListener('click', randomColor, false);
