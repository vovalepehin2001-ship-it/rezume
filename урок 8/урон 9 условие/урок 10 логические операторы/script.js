// const hamberger = 5,
//     fries = 0;
//     if (hamberger && fries){
//         console.log('Good ed');
//     }
// console.log((hamberger && fries));

const hamberger = 3,
    fries = 1,
    cola = 0,
    nuggets = 2;
// console.log(hamberger === 3 && fries && cola); // логический оператор возвращает само значение на котором он остановился
// console.log(1 && 0); // оператор и всегда возращает первое ложное значение, если все операторы верны он возвращает последние значение
// console.log(1 && 5);
// console.log(null && 5);

    if (hamberger === 3 && fries === 1 || cola === 2 && nuggets){ // или запинается на правде 
        console.log('Good ed');
    }else {
        console.log('god bay')
    }
console.log(hamberger === 3 && fries === 1 || cola === 2 && nuggets);


let johnReport, alexReportm, samReport, mariaReport = 'done';
console.log(johnReport || alexReportm || samReport || mariaReport);


