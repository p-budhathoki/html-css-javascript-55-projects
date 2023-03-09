// current slide
let current = 1;
let playPauseBool = true;
let interval;

// function to slide the images
const changeSlides = () => {
  // select all the slides and store in slideList
  const slideList = document.querySelectorAll(".slide");

  // convert the slideList to an array of slides
  const slides = Array.from(slideList);
  if (current > slides.length) {
    current = 1;
  } else if (current === 0) {
    current = slides.length;
  }

  // loop through the array of slides
  slides.forEach((slide) => {
    // slide.classList gives the class [slide, slide-1]. we need slide-1 therefore index 1 (slide.classList[1]). we use .split at hyphen which returns two items [slide,1] and to access the second item in array we use the index 1. (split('-')[1]). *1 converts the string to a number
    if (slide.classList[1].split("-")[1] * 1 === current) {
      slide.style.cssText = "visibility: visible; opacity:1";
    } else {
      slide.style.cssText = "visibility: hidden; opacity:0";
    }
  });
};

const arrowVisibility = () => {
  const arrows = document.querySelectorAll(".control");

  Array.from(arrows).forEach((arrow) => {
    if (!playPauseBool) {
      arrow.classList.add("arrows-visibility");
    } else {
      arrow.classList.remove("arrows-visibility");
    }
  });
};

const changePlayPause = () => {
  const i = document.querySelector(".play-pause i");

  const cls = i.classList[1];

  if (cls === "fa-play") {
    i.classList.remove("fa-play");
    i.classList.add("fa-pause");
  } else {
    i.classList.remove("fa-pause");
    i.classList.add("fa-play");
  }
};

const playPause = () => {
  if (playPauseBool) {
    interval = setInterval(() => {
      current++;
      changeSlides();
    }, 3000);
    playPauseBool = false;
  } else {
    clearInterval(interval);
    playPauseBool = true;
  }

  changePlayPause();
  arrowVisibility();
};

document.querySelector(".left-arrow").addEventListener("click", () => {
  if (!playPauseBool) {
    playPause();
  }
  current--;
  changeSlides();
});

document.querySelector(".right-arrow").addEventListener("click", () => {
  if (!playPauseBool) {
    playPause();
  }
  current++;
  changeSlides();
});
document.querySelector(".play-pause").addEventListener("click", () => {
  playPause();
});

changeSlides();
playPause();
