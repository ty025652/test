new CircleType(document.getElementById("curved-text"));

let menu = document.querySelector(".menu");
let nav = document.querySelector("#nav");
let body = document.querySelector("body");
let curvedText = document.querySelector("#curved-text")
let closeBtn = document.querySelector(".circle-container span")

let menuOpen = false


menu.addEventListener("click", function () {

  if (!menuOpen) {
  nav.style.top = "0";
  curvedText.style.display = 'none'
  menuOpen = true
  }
  else{
    nav.style.top = "-100%";
    curvedText.style.display = "flex";
    menuOpen = false
  }
});



