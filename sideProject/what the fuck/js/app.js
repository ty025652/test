let menuButton = document.querySelector('#menu')
let menuLists = document.querySelector('#nav')
let body = document.querySelector('body')
let menuIsOpen = false

menuButton.addEventListener('click', function () {
    if (!menuIsOpen) {
        menuLists.classList.add('nav--open')
        body.classList.add('fixed-screen')
        menuIsOpen = true
    } else {
        menuLists.classList.remove('nav--open')
        body.classList.remove('fixed-screen')
        menuIsOpen = false
    }
})
