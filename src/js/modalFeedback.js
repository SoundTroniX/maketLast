let openFeedback = document.querySelector('.footer__chat');
let modalFeedback = document.querySelector('.modal__feedback');
let closeFeedback = document.querySelector('.modal__button_close');

openFeedback.addEventListener('click', () => {
    modalFeedback.showModal();
})

closeFeedback.addEventListener('click', () => {
    modalFeedback.close();
})

let openFeedBackHeaderBtn = document.querySelector('.header__chat');

openFeedBackHeaderBtn.addEventListener('click', () => {
    modalFeedback.showModal();
})

modalFeedback.addEventListener('click', function(event) {
    if (event.target === this) {
        this.close();
    }
});