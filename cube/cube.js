// degrees
let degree = 0,
  bool = false,
  interval;

const rotate = () => {
  // select all three cubes as nodelist
  const cubes = document.querySelectorAll(".cube");
  console.log(cubes);
  // convert the node list to an array, loop through the array and assign the items the transform properties
  Array.from(cubes).forEach((cube) => {
    // apply the transform property to each cube item from the array of cubes
    cube.style.transform = `rotateY(${degree}deg)`;
  });
};

const changePlayPause = () => {
  const i = document.querySelector(".play-pause i");
  const cls = i.classList[1];
  console.log(cls);
  if (cls === "fa-play") {
    i.classList.remove("fa-play");
    i.classList.add("fa-pause");
  } else {
    i.classList.remove("fa-pause");
    i.classList.add("fa-play");
  }
};

const playPause = () => {
  if (!bool) {
    interval = setInterval(() => {
      degree += 90;
      rotate();
    }, 3000);
    changePlayPause();
    bool = true;
  } else {
    clearInterval(interval);
    changePlayPause();
    bool = false;
  }
};

// select left arrow button and add event listener

document.querySelector(".left-arrow").addEventListener("click", () => {
  degree += 90;

  //   console.log("clicked");
  rotate();
  if (bool) {
    playPause();
  }
});
// select left arrow button and add event listener using mouseover event
document.querySelector(".left-arrow").addEventListener("mouseover", () => {
  degree += 25;
  rotate();
});

// select left arrow button and add event listener using mouseout event
document.querySelector(".left-arrow").addEventListener("mouseout", () => {
  degree -= 25;
  rotate();
});

// select right arrow button and add event listener
document.querySelector(".right-arrow").addEventListener("click", () => {
  degree -= 90;
  rotate();
  if (bool) {
    playPause();
  }
});

// select right arrow button and add event listener using mouseover event
document.querySelector(".right-arrow").addEventListener("mouseover", () => {
  degree -= 25;
  rotate();
});
// select right arrow button and add event listener using mouseout event
document.querySelector(".right-arrow").addEventListener("mouseout", () => {
  degree += 25;
  rotate();
});

// select play-pause and add event listener
document.querySelector(".play-pause").addEventListener("click", () => {
  playPause();
});
