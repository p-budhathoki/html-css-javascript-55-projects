// select .dropdown-bg
const dropdownBg = document.querySelector(".dropdown-bg");

// attach to each nav element a mouse handler event
Array.from(document.querySelectorAll(".nav-item")).forEach((item) => {
  // attach mouseover event(equivalent to hover in css)
  item.onmouseover = () => {
    dropdownBg.style.opacity = 1;
    dropdownBg.style.visibility = "visible";

    dropdownBg.style.width = getComputedStyle(item.lastElementChild).width;
    dropdownBg.style.height = getComputedStyle(item.lastElementChild).height;

    dropdownBg.style.top = `${item.lastElementChild.offsetTop}px`;
    dropdownBg.style.left = `${item.lastElementChild.offsetLeft}px`;
  };

  item.onmouseout = () => {
    dropdownBg.style.opacity = 0;
    dropdownBg.style.visibility = "hidden";
  };
});
