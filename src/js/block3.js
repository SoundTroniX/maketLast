// Вытащили кнопку
const typesBtn = document.querySelector('.types__button');

// Вытащили картинку стрелочек рядом с кнопкой
const typesIcon = document.querySelector('.types__button_img'); 

// Вытащили контейнер где находятся все елементы
const typesList = document.querySelector('.types__list'); 


// обработчик событий для кнопки
typesBtn.addEventListener('click', function () {

    // добавление класса show контейнеру
    typesList.classList.toggle('types__show');
    
    // Условия, если текст кнопки один, поменять его на другой, и все это в обработчике событий
    if (typesBtn.textContent === 'Показать все') {
        typesBtn.textContent = 'Скрыть';
    } else {
        typesBtn.textContent = 'Показать все';
    }
    // Ротате
    const currentRotation = typesIcon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    typesIcon.style.transform = currentRotation;
});