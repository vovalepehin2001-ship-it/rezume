
let num = 20; // глобальная переменая
function showFirstMessage (text){ // в () указываем аргумент их может быть много
    console.log(text);
   let num = 10; // может брать глобальную переменую
   console.log(num); // когда функция вызвается если она не может найти, то идет на уровень выше
}
// если переменая объявлина в внутри функции снаруже она не доступна
showFirstMessage('Hello world'); // чтобы вызвать функцию надо ее вызвать в конце
console.log(num); // будет 20 потому что вызываем глобалюную перемуную потому что она не знает что есть еще переменая num


function calc(a, b){
    return(a + b); // позволяет вернуть функцию во внешний мир. функция заканчивается на ретурн
}
console.log(calc(4, 3));
console.log(calc(5, 6));

function ret(){
    let num = 50;
    return num;
}

const anitherNum = ret();
console.log(anitherNum);

// функция существует до дого как будет вызвана

const logger = function(){
    console.log('Hello')
};
logger();

// const calc = (a, b)=> a+b; // cтрелочная функции и она не имеет функции вызова 
const calc = (a, b)=>{
    console.log('1');
    return a + b;
};