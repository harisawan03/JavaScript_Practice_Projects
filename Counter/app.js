const counter = document.querySelectorAll('#value');
const btn_decrease = document.querySelector('#decrease');
const btn_reset = document.querySelector('#reset');
const btn_increase = document.querySelector('#increase');

btn_decrease.addEventListener('click', function(){
  counter[0].textContent--;
  handleColor();
}, false);

btn_reset.addEventListener('click', function(){
  counter[0].textContent = 0;
  handleColor();
}, false);

btn_increase.addEventListener('click', function(){
  counter[0].textContent++;
  handleColor();
}, false);

function handleColor() {
  if (counter[0].textContent < 0) {
    counter[0].style.color = 'red';
  } else if (counter[0].textContent > 0) {
    counter[0].style.color = 'green';
  } else {
    counter[0].style.color = 'black';
  }
  console.log(counter[0].textContent);
}