// select hamburger menu and the navbar
const menuIcon = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".navbar");

// add event listener to menuIcon
menuIcon.addEventListener("click", () => {
    navBar.classList.toggle("change");
})
