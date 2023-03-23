// select all three arrows
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
  // current date
  const now = new Date();
  // console.log(now);

  // get minutes, seconds and hour
  const getSeconds = now.getSeconds();
  const getMinutes = now.getMinutes();
  const getHours = now.getHours();

  // convert minutes,seconds and hour into degrees
  const secondDegree = (getSeconds / 60) * 360;
  const minuteDegree = (getMinutes / 60) * 360;
  const hourDegree = (getHours / 12) * 360;

  second.style.transform = `rotate(${secondDegree}deg)`;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate, 1000);
