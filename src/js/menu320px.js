let menuPage320 = document.querySelector('.menu');
let burgerButtonMenu = document.querySelector('.menu__header_burger');
let burgerButtonHeader = document.querySelector('.header__burger');

burgerButtonMenu.addEventListener('click', function () {
    // menuPage320.classList.remove('menu');
    menuPage320.classList.add('menu__close');
});

burgerButtonHeader.addEventListener('click', function () {
    menuPage320.classList.remove('menu__close');
    menuPage320.classList.add('menu');
});

