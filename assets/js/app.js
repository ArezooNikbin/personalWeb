const navToggleIcon = document.querySelector('.nav__hamburgerMenu')
const menu = document.querySelector('.menu')
const resumeListItems = document.querySelectorAll('.resumelist__item')

navToggleIcon.addEventListener('click',function (){
    this.classList.toggle('nav__hamburgerMenu--open')
    menu.classList.toggle('menu--open')
})

resumeListItems.forEach(resumeListItem => {
    resumeListItem.addEventListener('click',function (){
        document.querySelector('.resumelist__item--active').classList.remove('resumelist__item--active')
        document.querySelector('.resume__content--show').classList.remove('resume__content--show')
        this.classList.add('resumelist__item--active')
        let contentId = this.getAttribute('data-content-id')
        document.querySelector(contentId).classList.add('resume__content--show')
    })
})




