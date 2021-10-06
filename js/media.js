'use strict';
// scroll reveal
window.sr = ScrollReveal();
sr.reveal('');

ScrollReveal().reveal('.item', { 
    interval: 16,
    reset: true, 
    desktop: true
 });

 // button to top
const scrollTop = document.querySelector('#button-top');
window.addEventListener('scroll',() => {
    scrollTop.classList.toggle('active', window.scrollY > 500);
});
