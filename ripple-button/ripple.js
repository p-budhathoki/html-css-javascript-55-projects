// select button
const btn = document.querySelector(".btn");
let ripple;
// attach event listener with mouse enter event

btn.addEventListener("mouseenter", (e) => {
  // get cursor position
  //   console.log(e.target.getBoundingClientRect());

  // get left  and top position of the cursor inside the circle
  const left = e.clientX - e.target.getBoundingClientRect().left;
  console.log(left);

  const top = e.clientY - e.target.getBoundingClientRect().top;
  console.log(top);

  // create a new div element
  ripple = document.createElement("div");
  // add .ripple class to the div
  ripple.classList.add("ripple");
  // assign values of left and top styles to the div element
  ripple.style.left = `${left}px`;
  ripple.style.top = `${top}px`;
  // append the element to the button
  btn.prepend(ripple);
});

// event listener for mouseleave event
btn.addEventListener("mouseleave", () => {
  btn.removeChild(ripple);
});
