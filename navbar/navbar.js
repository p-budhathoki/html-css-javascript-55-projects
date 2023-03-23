// select all navbar links
const links = document.querySelectorAll(".navbar-link");

// go through each link and attach event listener
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => {
      link.className = "navbar-link";
    });
    //    add new class to the link
    link.classList.add("change");

    //   add new class to the siblings
    link.previousElementSibling.classList.add("prevElChange");
    link.previousElementSibling.classList.add("nextElChange");
  });
});
