const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

let intervalTime = null;

btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);

btnStop.setAttribute('disabled', true);

function onBtnStart() {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;

  intervalTime = setInterval(() => {
    document.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);

  btnStart.setAttribute('disabled', true);
  btnStop.removeAttribute('disabled');
}

function onBtnStop() {
  clearInterval(intervalTime);

  btnStart.removeAttribute('disabled');
  btnStop.setAttribute('disabled', true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
