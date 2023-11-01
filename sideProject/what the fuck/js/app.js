let menuButton = document.querySelector('#menu')
let menuLists = document.querySelector('#nav')
let menuIsOpen = false

menuButton.addEventListener('click', function () {
    if (!menuIsOpen) {
        menuLists.classList.add('nav--open')
        menuIsOpen = true
    } else {
        menuLists.classList.remove('nav--open')
        menuIsOpen = false
    }
})
