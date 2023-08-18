import { Notify } from 'notiflix/build/notiflix-notify-aio';


const elem = {
  form : document.querySelector('.form'),
  input_first_delay : document.querySelector('input[name="delay"]'),
  input_delay_step : document.querySelector('input[name="delay"]'),
  input_amount : document.querySelector('input[name="amount"]'),
  button : document.querySelector('button[type="submit"]')
}

elem.form.addEventListener('click', formSubmit);
function formSubmit() {
  
}


createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
















function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
