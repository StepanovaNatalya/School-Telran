/*console.log('Hello!');
console.log('Hello!');
console.log('Hello!');
console.log('Hello!');
console.log('Hello!');*/

//============While==================

let count = 5;

while(count > 0){
    console.log('Hello!');
    count --;
}

//count -> 4
let b = count--; // b -> 4; count -> 3
b = --count; // b -> 2 count -> 2

let i = 3;

while(i){
    alert(i); 
    i--;
}

//============= Do while ===========

let j = 1;

/*do{
    alert(j);
    j++;
}while(j < 4)*/

let numbLarge50;

do{
    numbLarge50 = prompt('enter number >50');
}while(numbLarge50 <=50 && numbLarge50);

//=============== For =================
//let = 1;
for(let i = 1, j = 5; i < 0; i++, j--){
    alert('i = ' + i + ' j = ' + j);
}

//==============break && continue=========

let sum = 0;

while(true){
    let value = +prompt('enter number');  // null-> 0 -> false, '' -> 0 -> false, 'aa'-> NaN -> false, '5' -> 5 -> true.
    if(!value){
        break;
    }
    sum += value;
}

alert('summe is: ' + sum);

for(let i = 0; i < 10; i++){
    if(i % 2 == 0 ) {continue};
    alert(i);
}

//=========================================
// num -> 5;
// summe = 1 + 2 + 3 + 4 + 5
let number, summe = 0;

do{
    number = +prompt('enter number > 0'); // number === NaN
}while(isNaN(number) || number < 0 );

for(let i = 1; i <= number; i++){
    summe += i;
}

alert(summe);

//========================================

let answear = parseInt(Math.random() * 10);

alert(answear);

let a = 2.345678978;

alert('Hello\nworld!' + a.toFixed(2));