'use strict';

// button to top
const scrollTop = document.querySelector('#button-top');
window.addEventListener('scroll',() => {
    scrollTop.classList.toggle('active', window.scrollY > 500);
});

// About Page
window.sr = ScrollReveal();
sr.reveal('');
sr.reveal('.festival-wrapper',{
    origin: 'left',
    distance: '100px',
    delay: 200,
    duration: 2000
});

sr.reveal('.mayor-wrapper',{
    origin: 'right',
    distance: '100px',
    delay: 400,
    duration: 2000
});



