const button_start = document.querySelector('button[data-start]');
const button_stop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

button_start.addEventListener('click', onClickRandomStart); 
button_stop.addEventListener('click', a);


function onClickRandomStart() {
    body.style.backgroundColor = getRandomHexColor();
}










function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
      