let numberOfFilms;
function start (){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){ // не число IsNaN)
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB =  {
    count: numberOfFilms,
    movies: {
        
    },
    actors: {

    },
    genres: [],
    privat: false
};


for(let i = 0; i< 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    if(a !=null && b !=null && a != '' && b !="" && a.length < 50){ // сдесь логика работает так проверяем на null(пустое поле через оператор не !)
        personalMovieDB.movies[a] = b;
    }else {
        i--;
    } // если условие не выполняется то пользователю задается тот же вопрос

//     != null проверяет, что не null.

// != '' проверяет, что строка не пустая.

// a.length < 50 ограничивает длину.    
// if (a && b && a.length < 50) {
//    personalMovieDB.movies[a] = b;
// } else {
//    i--;
// } (a && b в JS автоматически отсеет null и пустые строки).

}

function rememberMyFilms(){
    for(let i = 0; i< 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
        b = prompt('На сколько оцените его?', '');
    if(a !=null && b !=null && a != '' && b !="" && a.length < 50){ // сдесь логика работает так проверяем на null(пустое поле через оператор не !)
        personalMovieDB.movies[a] = b;
    }else {
        i--;
    } // если условие не выполняется то пользователю задается тот же вопрос

//     != null проверяет, что не null.

// != '' проверяет, что строка не пустая.

// a.length < 50 ограничивает длину.    
// if (a && b && a.length < 50) {
//    personalMovieDB.movies[a] = b;
// } else {
//    i--;
// } (a && b в JS автоматически отсеет null и пустые строки).

    }
}
rememberMyFilms();

function detectPersonalLevel(){
if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Error');
}
}
detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);    
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();