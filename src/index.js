import "./styles/styles.scss";

console.log("hello world!");


const menuBtn = document.querySelector('.js-menu-btn')
const navLinks = document.querySelector('.js-navigation-links')

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('menu-open')
    navLinks.classList.toggle('show-menu')
})