// setInterval function executes at a specified interval

const interval = setInterval(() => {
  // select countdown div and store it in a variable
  const countdown = document.querySelector(".countdown");

  // create date object with future date as the deadline value
  const deadline = new Date(2023, 6, 1, 12, 00, 00);
  //   const deadline = new Date(2023, 02, 18, 01, 18, 00);
  // current date
  const current = new Date();
  // difference between current and deadline
  const diff = deadline - current;
  // time in milliseconds is shown by the diff
  //   console.log(diff);

  // total days from diff
  const days = Math.floor(diff / (24 * 60 * 60 * 1000)) + "";
  //   console.log(days);
  // total hours from diff
  const hours = Math.floor((diff / (60 * 60 * 1000)) % 24) + "";
  //   console.log(hours);
  // total hours from diff
  const minutes = Math.floor((diff / (60 * 1000)) % 60) + "";
  //   console.log(minutes);
  // total hours from diff
  const seconds = Math.floor((diff / 1000) % 60) + "";
  //   console.log(seconds);

  // attach html element to the countdown div dynamically
  countdown.innerHTML = `
<div data-content = "Days">${days.length === 1 ? `0${days}` : days}</div>
<div data-content = "Hours">${hours.length === 1 ? `0${hours}` : hours}</div>
<div data-content = "Minutes">${
    minutes.length === 1 ? `0${minutes}` : minutes
  }</div>
<div data-content = "Seconds">${
    seconds.length === 1 ? `0${seconds}` : seconds
  }</div>
`;

  // if the difference is 0 display a message
  if (diff < 0) {
    clearInterval(interval);
    countdown.innerHTML = "<h1>Here We Go!!!</h1>";
  }

  // reset button
  document.querySelector(".reset").addEventListener("click", () => {
    clearInterval(interval);
    //   loop through all the div elements
    const divs = document.querySelectorAll(".countdown div");

    //   change the content of each div element
    divs.forEach((div) => {
      div.innerHTML = "00";
    });
  });
}, 1000);
