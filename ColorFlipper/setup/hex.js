const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById('btn');
const display = document.getElementById('display');

let setColor;

function randomColor() {
  setColor = '#';
  for(let i = 0; i < 6; i++){
    setColor += hex[Math.floor(Math.random() * hex.length)];
  }

  document.body.style.backgroundColor = setColor;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerHTML = "Background Color: " + setColor;
}

button.addEventListener('click', randomColor, false);
