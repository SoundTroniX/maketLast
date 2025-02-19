const readMoreButton = document.querySelector('.readmore');
const readMorePage = document.querySelector('.main__text_block');

readMoreButton.addEventListener('click', () => {
    readMorePage.classList.toggle('main__text_block-show');
    readMoreButton.classList.toggle('rotate-icon'); /* Переключаем класс rotate-icon */
})