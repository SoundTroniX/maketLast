const readMoreButton = document.querySelector('.readmore');
const readMorePage = document.querySelector('.main__text_block');
const readMoreIcon = document.querySelector('.readmore__expand');

readMoreButton.addEventListener('click', () => {
    readMorePage.classList.toggle('main__text_block-show');
    const currentRotate = readMoreIcon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    readMoreIcon.style.transform = currentRotate;
})