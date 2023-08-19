
import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "flatpickr/dist/flatpickr.min.css";
import convertMs from "./convertMs";

const elem = {
 input : document.querySelector('#datetime-picker'),
 button : document.querySelector('[data-start]'),
 span_days : document.querySelector('[data-days]'),
 span_hours : document.querySelector('[data-hours]'),
 span_minutes : document.querySelector('[data-minutes]'),
 span_seconds : document.querySelector('[data-seconds]')
}

elem.button.disabled = true;

let chosenDate;
let timerId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let selectedDate = (selectedDates[0]);
  
    //////////past
      if (selectedDate < options.defaultDate) {
        Notify.failure("😥Please choose a date in the future"); 
        elem.button.disabled = true; 
        elem.input.style.borderColor = "red"; 
        

    //////////future
      } else {
        chosenDate = selectedDate; 
        Notify.success("😄Congratulations! You are now in the future");
        elem.button.disabled =  false; 
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
            elem.button.disabled = true; 
        }
        const { days, hours, minutes, seconds } = convertMs(deltaTime); 
        elem.span_days.textContent = days;
        elem.span_hours.textContent = hours;
        elem.span_minutes.textContent = minutes;
        elem.span_seconds.textContent = seconds; 
    }, 1000);
}


