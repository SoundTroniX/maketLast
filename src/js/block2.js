// Вытащили кнопку
const articleBtn = document.querySelector('.article__button');

// Переменная для списка
let articleList = document.querySelector('.article__list');

// обработчик событий для кнопки
articleBtn.addEventListener('click', function () {

    articleBtn.classList.toggle('show-all'); /* Переключаем класс show-all */

    articleList.classList.toggle('article__list_show');
    // Условия, если текст кнопки один, поменять его на другой, и все это в обработчике событий
    if (articleBtn.textContent === 'Показать все') {
        articleBtn.textContent = 'Скрыть';
    } else {
        articleBtn.textContent = 'Показать все';
    }
});
