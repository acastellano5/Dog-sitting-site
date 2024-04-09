const menuBtn = document.querySelector('.menu-btn')
const popup = document.querySelector('.nav-popup')
const body = document.querySelector('body')
const closeBtn = document.querySelector('.close-popup')

menuBtn.addEventListener('click', function() {
    popup.classList.add('show-popup')
    body.classList.add('no-scroll')
})

closeBtn.addEventListener('click', function() {
    popup.classList.remove('show-popup')
    body.classList.remove('no-scroll')
})