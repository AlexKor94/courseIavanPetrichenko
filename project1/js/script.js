/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
// ================================ Teacher Option ================================
const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');
    
adv.forEach((item => {
    item.remove();
}));

genre.textContent = "Драма";
poster.style.backgroundImage = "url('img/bg.jpg')";
movieList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film,i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film}
        <div class="delete"></div>
    </li>
    `;
});

// a = a + 1;
// a += 1;


// ================================ My Option ================================

// const promos = document.querySelector('.promo__adv'),
//       genr = document.querySelector('.promo__genre'),
//       filmsList = document.querySelector('.promo__interactive-list'); 
      

// let moviesArr = movieDB.movies.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// promos.querySelectorAll('img').forEach(item => {
//     item.remove();
// });
// //promos.remove();
// genr.innerHTML = "Драма";

// document.querySelector('.promo__bg').style.backgroundImage = "url(img/bg.jpg)";
//  filmsList.querySelectorAll('.promo__interactive-item').forEach(item => { 
//     item.remove();
// });

// moviesArr.forEach((item, i) => {   
//     let elemLi = document.createElement('li');
//     elemLi.classList.add('promo__interactive-item');
//     elemLi.innerHTML = `${i+1}. ${item}`;
//     filmsList.append(elemLi);
// });










