// Task 01
// function getShortNames (arrayNames)
// ['Kolya', 'Anna', 'Misha', 'Mark', 'Innokentyi'] -> ['Anna', 'Mark',] (length == 4)
// function getShortNames (namesArray, nameLength);

let array = ['Kolya', 'Anna', 'Misha', 'Mark', 'Innokentyi'];

//--1--
function getShortNames(arrayNames) {
    let newArray = [];
    for (i = 0; i < arrayNames.length; i++) {
            if (arrayNames[i].length == 4) {
                
                newArray.push(arrayNames[i]);
            }
        
    }
    return newArray;
}

console.log(getShortNames(array));

//--2--

function getShortNames2(arrayNames, nameLength) {
    let newArray = [];
    for (i = 0; i < arrayNames.length; i++) {
            if (arrayNames[i].length == nameLength) {
                
                newArray.push(arrayNames[i]);
            }
        
    }
    return newArray;
}

//----------
function getShortNames3(arrayNames, nameLength){
    return arrayNames.filter(elm => elm.length == nameLength)
    
}

console.log(getShortNames3(array, 5));

/* function getShortNames2(namesArray, nameLength) {
    let newArray = [];
    for (i = 0; i < namesArray.length; i++) {
        let arrWord = [];
        arrWord = namesArray[i].split('');
        for (j = 0; j < arrWord.length; j++) {
            if (arrWord.length == nameLength) {
                newArray[i] = arrWord.join('');
                newArray.push(i);
            }
        }
    }
    return newArray;
} */

console.log(getShortNames2(array, 5));

//-------------------------------------------------------
//Task 02
/* 
function getDivisors(12) -> [2, 3, 4, 6]
function getDivisors(15) -> [3, 5]
function getDivisors(13) -> '13 is primy'
*/

function getDivisors1(n){
    let numbers = [];
    for(let i = 2; i < n; i++){
        if (n % i == 0){
            numbers.push(i);
        }
    }
        if (numbers.length == 0){
            return n + ' Is prime'
        
    }return numbers;
}
//-------------------------------------
function getDivisors1(n){
    let numbers = [];
    for(let i = 2; i <= Math.floor(n / 2); i++){
        if (n % i == 0){
            numbers.push(i);
        }
    }return numbers.length ? numbers : n +' is prime'
        /* if (numbers.length == 0){
            return n + ' Is prime'
        
    }return numbers; */
}

console.log(getDivisors1(15))

//--------------------------------

function getDivisors(number) {
    let arrayNumbers = [];

    for (i = number; i > 0; i--) {
        arrayNumbers.push(i);
    }
    return arrayNumbers.filter((elm) => number % elm == 0).reverse(arrayNumbers);
}

console.log(getDivisors(15))

//---------------------------------------------------------
//Task 03*
/* 
function sumDigitalNumber(10002345671) -> 29 -> 11 -> 2
(recursion)
*/
let num = 1000255;

function sumDigitalNumber(num) {
    let numb = [];
    numb = num.toString().split('').map(elm => parseInt(elm))
    let summ = 0;
    for (i = 0; i < numb.length; i++) {
        summ += numb[i]
     } return summ > 10 ? sumDigitalNumber(summ) : summ

       
       /* if(summ <= summ[0]) return;
        sumDigitalNumber(summ) */ 
}

console.log(sumDigitalNumber(num))






//-------------
function sumDigitalNumber2(number){
    /* if (number < 10){
        return number
    }return sumDigitalNumber2(number % 10 + Math.floor(number/10)) */
    return number < 10 ? number : sumDigitalNumber2(number % 10 + Math.floor(number / 10))
}

console.log(sumDigitalNumber2(num))

//--------------

function sumDigitalNumber(num){
    return num < 10 ? num : sumDigitalNumber(num.toString().split('').reduce((sum, number) => sum + parseInt(number), 0));
}

/////////////////////////////////////////
//function sumTwoArrays(array1, array1) -> вурнуть общую сумму всех чисел из двух массивов

let array1 = [1,2,3,4];
let array2 = [1,2,3,4];

/* function sumTwoArrays(array1, array2){
    let sum = 0;
    for(let i = 0; i < array1.length; i++){
        sum += array1[i]
    }
    for(let i = 0; i < array2.length; i++){
        sum+=array2[i]
    }return sum
} */

function sumTwoArrays(array1, array2){
    return sumArray(array1)+sumArray(array2);
}

function sumArray(array){
    let sum = 0
    for(let i = 0; i < array.length; i++){
        sum += array[i]
    }return sum
}

console.log(sumTwoArrays(array1, array2));