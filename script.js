const body = document.getElementById('body');
const nav = document.querySelector('.nav');
const navBar = document.querySelector('.nav__bar');
const toggle = document.getElementById('toggle');
const navLink = document.querySelector('.nav .nav__link');

toggle.addEventListener('click', () => {
    if(body.classList.contains('overflow')) {
        body.classList.remove('overflow');
        navBar.classList.remove('mobile__active');
        navBar.classList.remove('animate'); 
    } else {
        body.classList.add('overflow');
        navBar.classList.add('mobile__active');
        navBar.classList.add('animate'); 
        navBar.addEventListener('click', () => {
            body.classList.remove('overflow');
            navBar.classList.remove('mobile__active');
            navBar.classList.remove('animate'); 
        })
    }
})

window.onscroll = function() {
    let y = window.scrollY;
    if (y > 750) {
        nav.classList.add('nav--fixed')
    } else {
        nav.classList.remove('nav--fixed')
    }
};