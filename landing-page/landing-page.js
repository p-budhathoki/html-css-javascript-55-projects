// select all the boxes, span elements and buttons
const boxes = document.querySelectorAll(".box");
const heading = document.querySelector(".heading span");
const btn = document.querySelector(".btn");

// arrays for colors and technologies
const colors = [
  "#efd81d",
  "#61dbfb",
  "#41b883",
  "#b52e31",
  "#43853d",
  "#cf649a",
  "#e04e39",
];

const techs = ["JS", "React", "Vue", "AngularJS", "Node", "Sass", "Ember"];

// variable for counter
let current = 1;

// function to change colors of heading, heading names and buttons background   color
const textStyle = () => {
  // heading color change
  heading.style.color = colors[current - 1];
  // color change for text
  heading.textContent = techs[current - 1];
  // color change for button
  btn.style.backgroundColor = colors[current - 1];
  // color change for text inside button
  btn.firstElementChild.textContent = techs[current - 1];
};

// rotate and move the boxes at certain interval
let interval = setInterval(() => {
  // loop through the boxes and assign them to the new class and using css make the boxes bigger
  if (current > boxes.length) {
    current = 1;
  }
  boxes.forEach((box) => {
    // access the class of the box
    if (box.classList[1].split("-")[1] * 1 === current) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
  textStyle();
  current++;
}, 5000);

// animate boxes on click
boxes.forEach((box) => { 
    // add event listener
    box.addEventListener("click", () => { 
        // remove active from current box and add clicked 
        boxes.forEach((cube) => { 
            cube.classList.remove("active");
        })
        box.classList.add("active");

        current = box.classList[1].split("-")[1] * 1;
        textStyle();

        clearInterval(interval);
     })
});