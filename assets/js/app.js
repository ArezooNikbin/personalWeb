const navToggleIcon = document.querySelector('.nav__hamburgerMenu')
const menu = document.querySelector('.menu')

navToggleIcon.addEventListener('click',function (){
    this.classList.toggle('nav__hamburgerMenu--open')
    menu.classList.toggle('menu--open')
})


