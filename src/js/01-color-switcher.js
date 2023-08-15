import getRandomHexColor from './getRandomColor';


const elem = {
button_start : document.querySelector('button[data-start]'),
button_stop : document.querySelector('button[data-stop]'),
body : document.querySelector('body'),

};


elem.button_start.addEventListener('click', onClickStart);
elem.button_stop.addEventListener('click', onClickStop);

let color_random = null;

color_random = setTimeout(() => {
  elem.body.style.backgroundColor = getRandomHexColor();
}, 2000)

function onClickStart() {
  elem.body.style.backgroundColor = getRandomHexColor();
  elem.button_start.disabled = true;
  elem.button_stop.disabled = false;
  
}

function onClickStop() {

  elem.button_start.disabled = false;
  elem.button_stop.disabled = true;
  clearInterval(color_random);
}


