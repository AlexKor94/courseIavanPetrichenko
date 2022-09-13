/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */
'use strict';
document.addEventListener('DOMContentLoaded', () => {


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
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    const sortArr = (arr) => {
            arr.sort();
    };
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if(newFilm){

            if (newFilm.length > 21){
                newFilm = `${newFilm.substring(0,22)}...`;
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);     
        }

        if (favorite){
            console.log("Добавляем любимый фильм");
        }

        event.target.reset();
        
    });    

    const deleteAdv = (arr) => {
        arr.forEach((item => {
            item.remove();
        }));
    }
           

    const makeChanges = () => {
        genre.textContent = "Драма";
        poster.style.backgroundImage = "url('img/bg.jpg')";
    };
    
    function createMovieList(films, parent){
        sortArr(films);
        parent.innerHTML = '';  
        films.forEach((film,i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click',()=>{
                item.parentElement.remove();
                movieDB.movies.splice(i,1);
                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});





// a = a + 1;
// a += 1;


// ================================ My Option ================================
// const blockAddFilm = document.querySelector('.add');
// blockAddFilm.querySelector('button').addEventListener('click',(event) => {
//     event.preventDefault();
//     addFilm();
// });

// let deleting = document.querySelectorAll('.delete');
// deleting.forEach((item) => {
//     item.addEventListener('click',(element)=>{
//         let deleteFilm = element.target.parentElement.innerText.slice(2);
//         let newArray = movieDB.movies.filter((film) => {
//            return film.toLowerCase() !== deleteFilm.toLowerCase();
//         });
//         movieDB.movies = newArray;
//         element.target.parentElement.remove();
//         reloadFilms();
//     });
// });

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

// function addFilm(){
//     let newFilm = blockAddFilm.querySelector('.adding__input').value;
//     const check = blockAddFilm.querySelector('input[type="checkbox"]');
//     if (check.checked){
//         console.log("Добавляем любимый фильм");
//     }
//     if(newFilm.length > 21) {
//         newFilm = `${newFilm.slice(0,21)}...`;
//     }  
//     movieDB.movies.push(newFilm);
//     reloadFilms();
// }

// function reloadFilms(){
//  document.querySelector('.promo__bg').style.backgroundImage = "url(img/bg.jpg)";
//  filmsList.querySelectorAll('.promo__interactive-item').forEach(item => { 
//     item.remove();
// });

//     let moviesArr = movieDB.movies.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())); 
//     moviesArr.forEach((film,i) => {
//         movieList.innerHTML += `
//         <li class="promo__interactive-item">${i+1} ${film}
//             <div class="delete"></div>
//         </li>
//         `;
//     });



//     deleting = document.querySelectorAll('.delete');
//     deleting.forEach((item) => {
//         item.addEventListener('click',(element)=>{
//             let deleteFilm = element.target.parentElement.innerText.slice(2);
//             let newArray = movieDB.movies.filter((film) => {
//                return film.toLowerCase() !== deleteFilm.toLowerCase();
//             });
//             movieDB.movies = newArray;
//             element.target.parentElement.remove();
//             reloadFilms();
//         });
//     });
// }







