import getRandomHexColor from './getRandomColor';


      
const elem = {
button_start : document.querySelector('button[data-start]'),
button_stop : document.querySelector('button[data-stop]'),
body : document.querySelector('body'),
};

// elem.button_stop.addEventListener('click', a);
elem.button_start.addEventListener('click', onClickRandomStart)

function onClickRandomStart() {
  elem.body.style.backgroundColor = getRandomHexColor();
}





