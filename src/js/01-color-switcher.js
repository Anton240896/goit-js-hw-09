import getRandomHexColor from './getRandomColor';

let color_random = null;

const elem = {
button_start : document.querySelector('button[data-start]'),
button_stop : document.querySelector('button[data-stop]'),
body : document.querySelector('body'),
};

elem.button_start.addEventListener('click', onClickStart);
function onClickStart() {
  color_random = setInterval(() => {
    elem.body.style.backgroundColor = getRandomHexColor();
  },1000);
  elem.button_start.disabled = true;
  elem.button_stop.disabled = false;
}

elem.button_stop.addEventListener('click', onClickStop);
function onClickStop() {
  elem.button_start.disabled = false;
  elem.button_stop.disabled = true;

  clearInterval(color_random);
}
