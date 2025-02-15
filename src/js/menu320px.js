let menuPage320 = document.querySelector('.menu');
let burgerButtonMenu = document.querySelector('.menu__header_burger');
let burgerButtonHeader = document.querySelector('.header__burger');
let overlayPage = document.querySelector('.page__overlay');

burgerButtonMenu.addEventListener('click', function () {
    // menuPage320.classList.remove('menu');
    menuPage320.classList.add('menu__close');
    // overlay
    overlayPage.classList.remove('page__overlay_visible');
    overlayPage.classList.add('page__overlay');
});

burgerButtonHeader.addEventListener('click', function () {
    menuPage320.classList.remove('menu__close');
    menuPage320.classList.add('menu');
    // overlay
    overlayPage.classList.remove('page__overlay');
    overlayPage.classList.add('page__overlay_visible');
});

document.addEventListener("click", function(e) {
    if (e.target.className == "page__overlay_visible") {
     menuPage320.classList.add('menu__close');
    //  overlay
    overlayPage.classList.remove('page__overlay_visible');
    overlayPage.classList.add('page__overlay');
    }
  });

