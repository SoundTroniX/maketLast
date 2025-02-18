// Вытащили кнопку
const typesBtn = document.querySelector('.types__button');

// Вытащили контейнер где находятся все елементы
const typesList = document.querySelector('.types__list'); 


// обработчик событий для кнопки
typesBtn.addEventListener('click', function () {

    typesBtn.classList.toggle('show-all'); /* Переключаем класс show-all */

    // добавление класса show контейнеру
    typesList.classList.toggle('types__show');
    
    // Условия, если текст кнопки один, поменять его на другой, и все это в обработчике событий
    if (typesBtn.textContent === 'Показать все') {
        typesBtn.textContent = 'Скрыть';
    } else {
        typesBtn.textContent = 'Показать все';
    }
});