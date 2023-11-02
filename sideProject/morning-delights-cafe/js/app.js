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


const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#home__carousel', {
        type: 'fade',
        interval: 4000,
        autoplay: true,
        rewind: true,
    }).mount();
});

new CircleType(document.querySelector('#menu'));




var casualFoodSplide = new Splide('#casual-food__carousel', {
    perPage: 3,
    focus: 0,
    // omitEnd: true,
    type: 'loop',
    autoplay: true,
    interval: 3000,
    breakpoints: {
        1300: {
            perPage: 2,
        },
        768: {
            perPage: 1,
        }
    }
});


casualFoodSplide.mount();


var coffeeAndDessertSplide = new Splide('#coffee-and-dessert__carousel', {
    perPage: 3,
    focus: 0,
    // omitEnd: true,
    type: 'loop',
    autoplay: true,
    interval: 3000,
    breakpoints: {
        1300: {
            perPage: 2,
        },
        768: {
            perPage: 1,
        }
    }
});

coffeeAndDessertSplide.mount();


let titleSubs = document.querySelectorAll('h2 span')
let text = document.querySelectorAll('.text p')
let titleH3 = document.querySelectorAll('h3')
let foodContainerText = document.querySelectorAll('.foods__container p')

const observer01 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade')
        }
    });
});

titleSubs.forEach(titleSub => {
    observer01.observe(titleSub);
});


const observer02 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade')
        }
    });
});

text.forEach(i => {
    observer02.observe(i);
});

const observer03 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade')
        }
    });
});

titleH3.forEach(h => {
    observer03.observe(h);
});


const observer04 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade')
        }
    });
});

foodContainerText.forEach(h => {
    observer04.observe(h);
});


