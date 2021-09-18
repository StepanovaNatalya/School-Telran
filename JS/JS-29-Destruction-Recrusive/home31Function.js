// Task 01
// function getShortNames (arrayNames)
// ['Kolya', 'Anna', 'Misha', 'Mark', 'Innokentyi'] -> ['Anna', 'Mark',] (length == 4)
// function getShortNames (namesArray, nameLength);

let array = ['Kolya', 'Anna', 'Misha', 'Mark', 'Innokentyi'];

//--1--
function getShortNames(arrayNames) {
    let newArray = [];
    for (i = 0; i < arrayNames.length; i++) {
        let arrWord = [];
        arrWord = arrayNames[i].split('');
        for (j = 0; j < arrWord.length; j++) {
            if (arrWord.length == 4) {
                newArray[i] = arrWord.join('');
                newArray.push(i);
            }
        }
    }
    return newArray;
}

console.log(getShortNames(array));

//--2--
function getShortNames2(namesArray, nameLength) {
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
}

console.log(getShortNames2(array, 5));

//-------------------------------------------------------
//Task 02
/* 
function getDivisors(12) -> [2, 3, 4, 6]
function getDivisors(15) -> [3, 5]
function getDivisors(13) -> '13 is primy'
*/


function getDivisors(number) {
    let arrayNumbers = [];

    for (i = number; i > 0; i--) {
        arrayNumbers.push(i);
    }
    let uniqArray = arrayNumbers.filter((elm) => number % elm == 0).reverse(arrayNumbers);
    return uniqArray;
}

console.log(getDivisors(15))

//---------------------------------------------------------
//Task 03*
/* 
function sumDigitalNumber(10002345671) -> 29 -> 11 -> 2
(recursion)
*/
let num = 10002345671;

function sumDigitalNumber(num) {
    let numb = [];
    numb = num.toString().split('').map(elm => parseInt(elm))
    let summ = 0;
    for (i = 0; i < numb.length; i++) {
        (summ) += numb[i]
     } return summ
       /* if(summ <= summ[0]) return;
        sumDigitalNumber(summ) */ 
}


console.log(sumDigitalNumber(num))
