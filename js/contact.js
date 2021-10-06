'use strict';

// -----------Form Validation-----------
const form = document.querySelector('form');
const userName = document.querySelector('#userName');
const lastName = document.querySelector('#userLastName');
const userEmail = document.querySelector('#userEmail');
const userMessage = document.querySelector('#userMessage');

function showError(input, msg){
    const formGroup = input.parentElement;
    formGroup.className = 'form-group error';
    const small = formGroup.querySelector('small');
    small.innerText = msg;
}

function showSuccess(input){
    const formGroup = input.parentElement;
    formGroup.className = 'form-group success';
}

form.addEventListener('submit', function(e){
    if(!userName.value){
     e.preventDefault();
     showError(userName, 'Please write your name');
    } else{
        showSuccess(userName);
    }
    if(!lastName.value){
     e.preventDefault();
     showError(lastName, 'Please write your last name');
    } else{
        showSuccess(lastName);
    }
    if(!userEmail.value){
        e.preventDefault();
        showError(userEmail, 'Please write your Email');
    } else {
        checkEmail(e);
    }
    if(!userMessage.value){
        e.preventDefault();
        showError(userMessage, 'Please write your Message');
    } else {
        showSuccess(userMessage);
        console.log('success');
 }
});

function checkEmail(e) {
    if(userEmail.value.indexOf('@') === -1 || userEmail.value.indexOf('.') === -1) {
        e.preventDefault();
        showError(userEmail, 'Please write a valid Email');
    } else {
        showSuccess(userMessage);
        console.log('success');
    }
}

// Scroll reveal
window.sr = ScrollReveal();
sr.reveal('');

sr.reveal('.container-contact',{
    origin: 'top',
    distance: '50px',
    duration: 3000
});

// button to top
const scrollTop = document.querySelector('#button-top');
window.addEventListener('scroll',() => {
    scrollTop.classList.toggle('active', window.scrollY > 80);
});


