import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import convertMs from './convertMs'
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

elem.button.addEventListener('click', clickStart);

function clickStart() {
    timerId = setInterval(() => {
let currentTime = new Date;
    })
}
let currentTime = Date.now;
console.log(currentTime);