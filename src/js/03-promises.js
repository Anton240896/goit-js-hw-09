// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const elem = {
//   form: document.querySelector('.form'),
//   input_delay: document.querySelector('input[name="delay"]'),
//   input_step: document.querySelector('input[name="step"]'),
//   input_amount: document.querySelector('input[name="amount"]')
// };

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//     const shouldResolve = Math.random() > 0.3;
//     if (shouldResolve) {
//         resolve({ position, delay });
//       } 
//       else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
//  }


//   elem.form.addEventListener('click', promiseCreate);
// function promiseCreate(evt) {
//   evt.preventDefault();

//   let delayValue = Number(elem.input_delay.value);
//   let stepValue = Number(elem.input_step.value);
//   let amountValue = Number(elem.input_amount.value);

//   for (let i = 1; i <= amountValue; i += 1) {

//     createPromise(i, delayValue + stepValue * (i - 1))  
//         .then(({ position, delay }) => {
//         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//   }
// }


const form = document.querySelector('.form');
 
form.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
  evt.preventDefault();

  const amount = Number(evt.currentTarget.elements.amount.value);
  const step = Number(evt.currentTarget.elements.step.value);
  const delay = Number(evt.currentTarget.elements.delay.value);

  for (let i = 1; i <= amount; i+=1) {
setTimeout(() => {

  createPromise(i,delay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
       Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
});
  delay += step;
},delay);
}
}


function createPromise(position, delay) {
  return new Promise((res,rej) => {

    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      res({ position, delay})
  }
  else {
    rej({position,delay})
  }
});
}