/* Задания:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */
//----------------------------------------------

//Task 1
//1) Удалить все рекламные блоки со страницы (правая часть сайта)

const blocks = document.querySelector('.promo .promo__adv');

while (blocks.firstChild){
    blocks.removeChild(blocks.firstChild);
}
console.log(blocks)

//var 2
/* const adv = document.querySelectorAll('.promo__adv img');

adv.forEach(item.remove()); */


//----------------------------------------------

//Task 2
//2) Изменить жанр фильма, поменять "комедия" на "драма"

const genre = document.querySelector('.promo__genre');

genre.textContent = 'DRAMA';
//------------------------------------------------
//Task 3
//3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.

const newBackground = document.querySelector('.promo__bg');

newBackground.style.backgroundImage = 'url(./img/bg.jpg)';

//------------------------------------------------
//Task 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
//Отсортировать их по алфавиту 

'use strict';

const movieDB = {
    movies: [
        "On the Rocks",
        "The Trip to Greece",
        "Bad Education",
        "The Nest",
        "Nomadland"
    ],
},
oldMovies = document.querySelector('.promo__interactive-list');
console.log(oldMovies);
movieDBNew = movieDB.movies.sort();

for(let item in movieDBNew){
    for(let i of oldMovies){
        i.textContent = item.textContent
    }
}


