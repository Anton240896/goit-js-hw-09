// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const elem = {
//     input : document.querySelector('#datetime-picker'),
//     button : document.querySelector('button[data-start]'),
//     span_days : document.querySelector('span[data-days]'),
//     span_hours : document.querySelector('span[data-hours]'),
//     span_minutes : document.querySelector('span[data-minutes]'),
//     span_seconds : document.querySelector('span[data-seconds]')
// }

// elem.button.disabled = true;

// let timerId = null;
// let chosenDate = null;



// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//    let selectedDate = (selectedDates[0]);
     
//      //////////past
//      if (selectedDate < Date.now()) {
//         Notify.failure("🥺Please choose a date in the future");
//         elem.button.disabled = true;

//         /////////future
//       } else if (selectedDate > Date.now()) {
//           Notify.success("😄Congratulations! You are now in the future");
//           elem.button.disabled = false;
//       }
//     }
//      };
     
//   const flatpickr = flatpickr(elem.input, options);

// elem.button.addEventListener('click', timerOn) 
//  function timerOn() {
//  timerId = setInterval(() => {
//     elem.button.disabled = true;
//     elem.input.disabled =  true;

//     const currentTime = Date.now();
//     const differenceTime = chosenDate - currentTime;

//     if (differenceTime < 1000) {
//     clearInterval(timerId);
//     elem.button.removeAttribute('disabled');
//     };

//     const { days, hours, minutes, seconds } = convertMs(differenceTime); 
//     elem.span_days.textContent = days;
//     elem.span_hours.textContent = hours;
//     elem.span_minutes.textContent = minutes;
//     elem.span_seconds.textContent = seconds; 
//  },1000)
//  };
 
//  function convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
  
    
//     const days = Math.floor(ms / day);
//     const hours = Math.floor((ms % day) / hour);
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
//     return { days, hours, minutes, seconds };
//   }
  
//   function addLeadingZero(value) {
//     return String(value).padStart(2, '0');
//   }
//   addLeadingZero();

////////////////////////////////////////////////

//////////////////////////////////////
import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "flatpickr/dist/flatpickr.min.css";

const elem = {
 input : document.querySelector('#datetime-picker'),
 button : document.querySelector('[data-start]'),
 span_days : document.querySelector('[data-days]'),
 span_hours : document.querySelector('[data-hours]'),
 span_minutes : document.querySelector('[data-minutes]'),
 span_seconds : document.querySelector('[data-seconds]')
}

elem.button.disabled = true;

let chosenDate = null;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
  
    //////////past
      if (selectedDates[0] < Date.now()) {
        Notify.failure("😥Please choose a date in the future"); 
        elem.button.disabled = true; 
        elem.input.style.borderColor = "red"; 

        
    //////////future
      } else {
        chosenDate = selectedDates[0]; 
        Notify.success("😄Congratulations! You are now in the future");
        elem.button.removeAttribute('disabled'); 
        elem.button.addEventListener('click', timerOn);
        elem.input.style.borderColor = "green"; 
    }
    }
};


flatpickr('#datetime-picker', options);

function timerOn() {
    timerId = setInterval(() => {
        elem.button.disabled =  true; 
        elem.input.disabled = true; 

        const currentTime = Date.now(); 
        const deltaTime = chosenDate - currentTime; 

        if (deltaTime < 1000) {
            clearInterval(timerId); 
            elem.button.removeAttribute('disabled'); 
        }
        const { days, hours, minutes, seconds } = convertMs(deltaTime); 
        elem.span_days.textContent = days;
        elem.span_hours.textContent = hours;
        elem.span_minutes.textContent = minutes;
        elem.span_seconds.textContent = seconds; 
    }, 1000);
}
function convertMs(ms) {
  // Кількість мілісекунд у одиниці часу
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Залишкові дні
  const days = addLeadingZero(Math.floor(ms / day));
  // Залишкові години
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Залишкові хвилини
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Залишкові секунди
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}
// Функція для додавання переднього нуля до числа Форматування часу
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};