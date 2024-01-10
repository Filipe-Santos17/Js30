const [clockPH, clockPM, clockPS] = ["hour-hand", "minute-hand", "second-hand"].map((i) => document.querySelector(`.${i}`));
const [hourP, minP, secP] = ["hour-p", "hour-m", "hour-s"].map((i) => document.querySelector(`.${i}`));
// let currentMinute, currentHour;

function changeDateTime() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  function calcTime(time) {
    return (time / 60) * 360 + 90;
  }

  // function isNecessaryChange(time, current, el) {
  //   if (time !== current) {
  //     current = time;
  //     el.style = `transform: rotate(${calcTime(time)}deg)`;
  //   }
  // }

  function changeTime(el, text) {
    el.textContent = text;
  }

  clockPS.style = `transform: rotate(${calcTime(seconds)}deg)`;
  clockPM.style = `transform: rotate(${calcTime(minutes)}deg)`;
  clockPH.style = `transform: rotate(${calcTime(hours)}deg)`;

  changeTime(secP, `Seconds: ${seconds}`);
  changeTime(minP, `Minutes: ${minutes}`);
  changeTime(hourP, `Hours: ${hours}`);
}

setInterval(changeDateTime, 1000);
