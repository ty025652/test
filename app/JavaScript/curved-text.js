new CircleType(document.getElementById("curved-text"));

let menu = document.querySelector(".menu");
let nav = document.querySelector("#nav");
let body = document.querySelector("body");
menu.addEventListener("click", function () {
  nav.style.top = "0";
  menu.style.display = "none";
  body.style.overflowY = 'hidden';
});