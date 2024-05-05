const menuBtn = document.querySelector('.menu-btn')
const popup = document.querySelector('.nav-popup')
const body = document.querySelector('body')
const closeBtn = document.querySelector('.close-popup')
const contactBtn = document.querySelector('.contact-btn')
const emailBtn = document.querySelector('.email-btn')
const phoneBtn = document.querySelector('.phone-btn')

menuBtn.addEventListener('click', function() {
    popup.classList.add('show-popup')
    body.classList.add('no-scroll')
})

closeBtn.addEventListener('click', function() {
    popup.classList.remove('show-popup')
    body.classList.remove('no-scroll')
})
contactBtn.addEventListener('click',function() {
        window.location='contact.html';
})
emailBtn.addEventListener('click',function() {
        window.open('mailto:maria.dogsitting24@gmail.com?subject=Dog%20Sitting')
})
phoneBtn.addEventListener('click',function() {
window.open('tel:3023459054')


})