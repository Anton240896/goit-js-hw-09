import { Notify } from 'notiflix/build/notiflix-notify-aio';

const elem = {
  form: document.querySelector('.form'),
  input_delay: document.querySelector('input[name="delay"]'),
  input_step: document.querySelector('input[name="step"]'),
  input_amount: document.querySelector('input[name="amount"]')
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } 
      else {
        reject({ position, delay });
      }
    }, delay);
  });
 }


  elem.form.addEventListener('click', promiseCreate);
function promiseCreate(evt) {
  evt.preventDefault();

  let delayValue = Number(elem.input_delay.value);
  let stepValue = Number(elem.input_step.value);
  let amountValue = Number(elem.input_amount.value);

  for (let i = 1; i <= amountValue; i += 1) {
    let promiseDelay = delayValue + stepValue * i;

    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}