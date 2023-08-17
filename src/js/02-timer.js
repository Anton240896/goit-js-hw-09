import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const elem = {
    input : document.querySelector('#datetime-picker'),
    button : document.querySelector('button[data-start]'),
    span_days : document.querySelector('span[data-days]'),
    span_hours : document.querySelector('span[data-hours]'),
    span_minutes : document.querySelector('span[data-minutes]'),
    span_seconds : document.querySelector('span[data-seconds]')
}

elem.button.disabled = true;

let timerId = null;
const currentTime = new Date();
let selected_date = null;



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
   let selectedDate = (selectedDates[0]);
     
     //////////past
     if (selectedDate < new Date()) {
        Notify.failure("🥺Please choose a date in the future");
        elem.button.disabled = true;

        /////////future
      } else if (selectedDate > new Date()) {
          Notify.success("😄Congratulations! You are now in the future");
          elem.button.disabled = false;
      }
    }
     };
     
  const flatpickr = flatpickr(elem.input, options);

elem.button.addEventListener('click', clickTimer) 
 function clickTimer() {
 const differenceTime =  selected_date - currentTime;

 if (differenceTime < 1000 ) {
clearInterval(timerId)
 }
 }
 
 
function createTimer({ days, hours, minutes, seconds }) {
  elem.span_days.textContent = days;
  elem.span_hours.textContent = hours;
  elem.span_minutes.textContent = minutes;
  elem.span_seconds.textContent = seconds;
}

 function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
  addLeadingZero();

  createTimer({ days, hours, minutes, seconds });
    return { days, hours, minutes, seconds };