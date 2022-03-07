let menu__btn = document.getElementById('menu__btn');
let menu = document.getElementById('menu');

menu__btn.addEventListener('click',handlebtnMenu);

function handlebtnMenu() {
    'use strict';
    menu.classList.toggle('show');
}