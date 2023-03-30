// select button element and add event listener
document.querySelector(".banner button").addEventListener("click", () => {
  // hide banner on clicking the button
  document.querySelector(".banner").style.display = "none";
  // display slideshow wrapper on clicking the button
  document.querySelector(".slideshow-wrapper").style.cssText =
        "opacity:1; visibility:visible";
    // enable slideshow when clicked
    document.querySelector(".slideshow").style.animation =  'slideshowAnim 24s infinite';
});
