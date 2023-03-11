// select hamburger menu and attach to it an event listener
document.querySelector(".hamburger-menu").addEventListener("click", () => {
  // select .container and classList which stores all the classes and add toggle method which adds the class .change if it doesn't exist and removes the .change if it exists
  document.querySelector(".container").classList.toggle("change");
  // console.log("clicked");
});

document.querySelector(".nav-list").addEventListener("click", (e) => {
  // store parent element of the clicked element
  const el = e.target.parentNode;
  console.log(el);

  if (el.classList[0] === "nav-link") {
    el.nextElementSibling.classList.toggle("change");
    el.classList.toggle("change");
  }
});
