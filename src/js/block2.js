// Вытащили кнопку
const articleBtn = document.querySelector('.article__button');

// Вытащили картинку стрелочек рядом с кнопкой
const articleIcon = document.querySelector('.article__button_img'); 

// Переменная для списка
let articleList = document.querySelector('.article__list');

// обработчик событий для кнопки
articleBtn.addEventListener('click', function () {

    articleList.classList.toggle('article__list_show');
    // Условия, если текст кнопки один, поменять его на другой, и все это в обработчике событий
    if (articleBtn.textContent === 'Показать все') {
        articleBtn.textContent = 'Скрыть';
    } else {
        articleBtn.textContent = 'Показать все';
    }
    // Ротате
    const currentRotation = articleIcon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    articleIcon.style.transform = currentRotation;
});
