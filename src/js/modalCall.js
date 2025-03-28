let openCallback = document.querySelector('.footer__call');
let modalCallback = document.querySelector('.modal__callback');
let closeCallback = document.querySelector('.modal__button_close-call');

openCallback.addEventListener('click', () => {
    modalCallback.showModal();
})

closeCallback.addEventListener('click', () => {
    modalCallback.close();
})


let openCallBackHeaderBtn = document.querySelector('.header__call');

openCallBackHeaderBtn.addEventListener('click', () => {
    modalCallback.showModal();
})

modalCallback.addEventListener('click', function(event) {
    if (event.target === this) {
        this.close();
    }
});