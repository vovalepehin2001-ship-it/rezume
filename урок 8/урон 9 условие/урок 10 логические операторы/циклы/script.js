let num = 50;

while (num <= 55){
    console.log(num);
    num++; 
}
// // // do сделай что то
// do {
//         console.log(num);
//     num++; 
// }
// while (num < 55);
for(let i = 1; i < 8; i++){
    if(i === 6){
        break; // прерывает цикл есть еще оператор continue он позволяет пропустить то условие
    }
    console.log(i);
 
}

for(let i = 20; i > 10; i--){
    if(i === 13){
        break;
    }
    console.log(i);
}


 for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
         continue;
     } else {
         console.log(i);
     }
 }

let num = 2;
while (num <= 16){
    if (num % 2 === 0){
        num++;
        continue;
    }else{
        console.log(num);
    }
    num++;
}

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}

fifthTask()

function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    console.log(result);
 
    
    
    // Не трогаем
    return result;
}