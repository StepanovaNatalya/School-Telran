//Task 1
let checkError = true;

 startGame();

 function startGame(){
     let repeat = true;
     while (repeat){
    const numbers = fillArrayRandomNumbers(5, 100);
    const maxQuestions = 3;
    checkError = 'true';
     showMessage(numbers);
     for(let i = 0; i < maxQuestions; i++){
        const randomIndex = getRandomRangeNumber(numbers.length);
        const userAnswer = getUserAnswer(randomIndex + 1);
        checkAnswer(numbers[randomIndex, userAnswer])
     }
     if(checkError){
         alert('You have a great memory!')
     }
     repeat = confirm('one more time?')
     }
 }

 function getRandomRangeNumber(range){
     return parseInt(Math.random * range);
 }

 function fillArrayRandomNumbers(length, range){
     let array = [];
     for(let i = 0; i < length; i++){
         array.push(getRandomRangeNumber(range));
     }
     return array;
 }

function showMessage(array){
    alert(`Remember numbers and orders\n${array}`);
}
 
function getUserAnswer(number){
    return +prompt(`What was the ${number} number?`);
}

function checkAnswer(number, userAnswer){
    if(userAnswer == number){
        alert('You right!!!')
    }else{
        alert(`Wrong answer, right number is ${number}`)
        checkError = false;
    }
}
 


// Task 2
//--v1--
const power = (a, b) => a ** b;
console.log(power(5,3))

//--v2--
let num = +prompt('enter first number')
let power = +prompt('enter power of the number')

function powerNumber(num, power) {
    let result = num;
    for(let i =0; i < power; i)
    return result;
}

let result = powerNumber(num1, num2);
alert(powerNumber(num1, num2));

// Task 3
const numbers = [2, 4, 6, 10, 12];

function sumNumbers(array) {
    let sum = 0;
    for (let number of array) {
        sum += number;
    }
    return sum;
}

console.log(sumNumbers(numbers));

// Task 4

function reversArray(array)
const numb = [];

for( i = 0; i < 5; i++){
    numb[i] = i +1
}

const reversNumbers = [];
let num = 5;

function reversArray(reversNumbers){
     for( i = 0; i < num; i++){
         reversNumbers.length = num - 1;
         console.log(reversNumbers)
     }
}

console.log(numb)
console.log(reversArray(reversNumbers))
