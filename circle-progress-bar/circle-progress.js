// select half circles, half circle top
const halfCircles = document.querySelectorAll(".half-circle");
const halfCircleTop = document.querySelector(".half-circle-top");
const progressBarCircle = document.querySelector(".progressbar-circle");

// add scroll event to the document

document.addEventListener("scroll", () => {
  // get the height of the viewport and the entire height of the document
  const pageViewportHeight = window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;
  const scrolledPortion = window.pageYOffset;

  // convert scroll portion of height into degrees
  const scrolledPortionDegree =
    (scrolledPortion / (pageHeight - pageViewportHeight)) * 360;
  // convert scroll portion of height into percentage
  let scrolledPortionPercent = Math.floor((scrolledPortionDegree / 360) * 100);

  progressBarCircle.textContent = `${scrolledPortionPercent}%`;

  // console.log(scrolledPortionDegree);
  halfCircles.forEach((el) => {
    el.style.transform = `rotate(${scrolledPortionDegree}deg)`;

    if (scrolledPortionDegree >= 180) {
      halfCircles[0].style.transform = `rotate(180deg)`;
      halfCircleTop.style.opacity = "0";
    } else {
      halfCircleTop.style.opacity = "1";
    }
  });
});
