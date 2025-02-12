let menuPage = document.querySelector('.menu');
let burgerButtonMenu = document.querySelector('.menu__header_burger');
let burgerButtonHeader = document.querySelector('.header__burger');

burgerButtonMenu.addEventListener('click', function () {
    // menuPage.classList.remove('menu');
    menuPage.classList.add('menu__close');
});

burgerButtonHeader.addEventListener('click', function () {
    menuPage.classList.remove('menu__close');
    menuPage.classList.add('menu');
});
