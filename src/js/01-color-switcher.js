const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[ data-stop]');
const body = document.querySelector('body');

console.log(buttonStop);

buttonStart.addEventListener('click', getChangeColorStart);
buttonStop.addEventListener('click');

function getChangeColorStart() {
    body.style.backgroundColor = getChangeColor();
}



function getChangeColor() {
    body.style.backgroundColor = getRandomHexColor();
  
     }


           
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
        
