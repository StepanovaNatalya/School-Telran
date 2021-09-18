//Task 1

let numberOfFilms;
start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        name: 'Vasya',
        toString: function () {
            let moviesList = '';
            for (let key in this) {
                if (typeof this[key] != 'function')
                    moviesList += `'${key}': ${this[key]}\n`
            }
            return moviesList;
        }
    },  //{'Titanic': 8.8, 'Hattika' : 9.4}
    genres: [],
    private: false,
    getMovieData: function (filmsNumber) {
        for (let i = 0; i < filmsNumber; i++) {
            const title = prompt('Enter the title of last watched movie'),
                rate = parseFloat(prompt('How do you rate it?'))
            if (title !== null && title != '' && rate != null && rate != '' && !isNaN(rate)) {
                this.movies[title] = rate;
            } else {
                alert('write correct data')
                i--;
            }
        }
    },
    getGenre: function (number) {
        for (let i = 1; i <= number; i++) {
            this.genres[i - 1] = prompt(`What is your top-${i} genre?`)
        }
    },
    showMovieDB: function () {
        if (!this.private) {
            alert(`You did watched: ${this.count} films`);
            alert(`You saved film:\n' + this.movies`);
            alert(`You favorite gerne: ${this.genres}`)
            alert(this.levelScoreMessage());
        }
    },
    levelScoreMessage: function () {
        if (this.count < 5) {
            return 'don\'t like movies?'
        } else if (this.count >= 5 && this.count <= 15) {
            return 'you are classic viewer\u{1F60D}'
        } else if (this.count > 15 && this.count <= 30) {
            return 'you\'re a movie buff!';
        } else {
            return 'error'
        }
    }
}

personalMovieDB.getMovieData(2);
personalMovieDB.getGenre(1);
personalMovieDB.showMovieDB();

console.log(personalMovieDB.movies.toString)

function start() {
    do {
        numberOfFilms = +prompt('How many films did you watch last month?');
    } while (isNaN(numberOfFilms))
}


// Task 02
/* Написать функцию, которая укорачивает строку 
      function stringCat (str, maxLength);

      stringCat('hello world!', 5) -> 'hello...'
      stringCat('hello', 5) -> 'hello'
*/
//--1v--
function stringCat(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    }
    return str;
}

//--2v--
function catString(str, maxLength) {
    return (str.length > maxLength) ? str.slice(0, maxLength) + '...' : str;
}

// Task 03
/* Игра русско-английский словарь;
   двухмерный массив с парами слов (всего пять пар)
   спрашивать пользователя перевод английского слова из массива,
если ответ правильный - выводить "Отлично!", если не - 
правильный перевод слова.   
*/

let words = [                   //words[1][0] -> engl index ->ru index=1
    ['apple', 'яблоко', 'Apfel'],
    ['orange', 'апельсин', 'Orange'],
    ['cherry', 'вишня', 'Kirsche'],
    ['kiwi', 'киви', 'Kiwi'],
    ['strawberry', 'клубника', 'Erdbeere'],
];

const ru = 1;
const eng = 0;
const de = 2;

checkUserTranslation();

function checkUserTranslation() {
    for (let i = 0; i < words.length; i++) {
         const getUserTranslation = getUserTranslation(i);
        if(userTranslation === words[i][de]) alert('Correct!')
        else alert (`wrong, correct answer is ${words[i][de]}`)
    }
}

function getUserTranslation(index){
    return prompt(`how do you translate the world ${words[index][eng]}?`);
}