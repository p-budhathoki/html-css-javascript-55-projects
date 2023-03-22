// select wrapper element
const slideshow = document.querySelector(".slideshow");

setInterval(() => {
  // remove items every 3 seconds
  const firstIcon = slideshow.firstElementChild;

  // add faded-out class to the first icon
  firstIcon.classList.add("faded-out");

  const thirdIcon = slideshow.children[3];

    thirdIcon.classList.add("light");
    thirdIcon.previousElementSibling.classList.remove("light");

  setTimeout(() => {
    slideshow.removeChild(firstIcon);

    // add the removed item to the end of the slideshow
    slideshow.appendChild(firstIcon);

    setTimeout(() => {
      firstIcon.classList.remove("faded-out");
    }, 500);
  }, 500);
}, 3000);
