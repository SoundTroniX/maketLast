let openCallback = document.querySelector('.footer__call');
let modalCallback = document.querySelector('.modal__callback');
let closeCallback = document.querySelector('.modal__button_close-call');

openCallback.addEventListener('click', () => {
    modalCallback.showModal();
})

closeCallback.addEventListener('click', () => {
    modalCallback.close();
})
