const heading = "Please Meet Our Team";
let i = 0;

// type text dynamically using function
const typing = () => {
  if (i < heading.length) {
    // select the heading element in html file and display the characters if the condition is true
    document.querySelector(".heading").innerHTML += heading.charAt(i);
    i++;
    setTimeout(typing, 150);
  }
};
typing();
