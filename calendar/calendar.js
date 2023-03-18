// create date object
const date = new Date();
// console.log(date);

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");
  const month = date.getMonth();
  // console.log(month);

  // last day of the month
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  // last day of the previous month
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  // last day of the previous month
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  // index of the first day of the month
  const firstDayIndex = date.getDay();

  // array to store all the months of the year
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // select h1 to display correct month
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  // select paragraph to display correct date
  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class = "prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class = "today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }
  monthDays.innerHTML = days; // outside of for loop
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class = "next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};
document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});
document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
