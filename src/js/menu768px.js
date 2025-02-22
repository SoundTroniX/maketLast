let menuPage = document.querySelector('.menu__close');
let burgerButtonMenu = document.querySelector('.menu__header_burger');
let burgerButtonHeader = document.querySelector('.header__burger');
let overlayPage = document.querySelector('.page__overlay');

// Закрытие бургера

burgerButtonMenu.addEventListener('click', function () {
    // menuPage.classList.remove('menu');
    menuPage.classList.toggle('menu');
    // overlay
    overlayPage.classList.remove('page__overlay_visible');
    overlayPage.classList.add('page__overlay');
    
});

// Открытие бургера

burgerButtonHeader.addEventListener('click', function () {
    
    menuPage.classList.toggle('menu');
    // overlay
    overlayPage.classList.remove('page__overlay');
    overlayPage.classList.add('page__overlay_visible');
    
});
