new CircleType(document.querySelector("#curved-text"));

 
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
  body.style.overflowY = 'hidden'
  menuOpen = true
  }
  else{
    nav.style.top = "-100%";
    curvedText.style.display = "flex";
    body.style.overflowY = 'scroll'
    menuOpen = false
  }
});




