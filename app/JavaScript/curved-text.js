new CircleType(document.querySelector("#curved-text"));

new CircleType(document.querySelector(".sp #curved-text"));
 
let menu = document.querySelector(".pc .menu");
let nav = document.querySelector(".pc #nav");
let body = document.querySelector("body");
let curvedText = document.querySelector(".pc #curved-text")
let closeBtn = document.querySelector(".pc .circle-container span")


let menuSp = document.querySelector(".sp .menu");
let navSp = document.querySelector(".sp #nav");
let curvedTextSp = document.querySelector(".sp #curved-text")
let closeBtnSp = document.querySelector(".sp .circle-container span")

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


menuSp.addEventListener("click", function () {

  if (!menuOpen) {
  navSp.style.top = "0";
  curvedTextSp.style.display = 'none'
  menuOpen = true
  }
  else{
    navSp.style.top = "-100%";
    curvedTextSp.style.display = "flex";
    menuOpen = false
  }
});




