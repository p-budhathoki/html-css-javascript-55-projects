// select banner button and add event listener
document.querySelector(".banner-btn").addEventListener("click", () => {
  // select banner and and hide it when click event is registered
  document.querySelector(".banner").style.display = "none";

  // form container is hidden by default. select the form container and make it visible by applying opacity to 1
  document.querySelector(".form-container").style.cssText =
    "opacity:1; visibility:visible";

  // select the container and change the background color
  document.querySelector(".container").style.background = "#cc683c";
});

// select the x button and add event listener
document.querySelector(".x-btn").addEventListener("click", () => {
  // display banner when x button is clicked
  document.querySelector(".banner").style.display = "flex";

  // hide the form container
  document.querySelector(".form-container").style.cssText =
    "opacity:0;visibility:hidden";

  // add the background by selecting the .container element
  document.querySelector(".container").style.cssText =
    "background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)), url(../images/signup-form-bg1.jpeg) center no-repeat; background-size: cover";
});
