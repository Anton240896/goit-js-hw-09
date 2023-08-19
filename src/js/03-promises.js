import { Notify } from 'notiflix/build/notiflix-notify-aio';

const elem = {
  form: document.querySelector('.form'),
  input_delay: document.querySelector('input[name="delay"]'),
  input_step: document.querySelector('input[name="step"]'),
  input_amount: document.querySelector('input[name="amount"]')
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
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

    createPromise(i, delayValue + stepValue * (i - 1))  
        .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

// import Notiflix from 'notiflix';

// const delayInput = document.querySelector('input[name="delay"]');
// const stepInput = document.querySelector('input[name="step"]');
// const amountInput = document.querySelector('input[name="amount"]');
// const createBtn = document.querySelector('button[type="submit"]');

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// createBtn.addEventListener('click', event => {
//   event.preventDefault();

//   const delay = Number(delayInput.value);
//   const step = Number(stepInput.value);
//   const amount = Number(amountInput.value);
//   for (let i = 1; i <= amount; i++) {
//     createPromise(i, delay + step * (i - 1))
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(
//           `✅ Fulfilled promise ${position} in ${delay}ms`
//         );
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(
//           `❌ Rejected promise ${position} in ${delay}ms`
//         );
//       });
//   }
// });