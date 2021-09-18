//Task 1
/*
 const numbers = [];

 for(let i = 0; i < 5; i++){
      numbers[i] = parseInt(Math.random() * 100);
 }

 alert(`Remember numbers and orders\n${numbers}`);

 let userAnswer = +prompt('What is first number?');
 if(userAnswer == numbers [0]){
     alert('You right!!!')
 }else{
     alert(`Wrong answer, right number is ${numbers[0]}`)
 }

 userAnswer = +prompt(`What is last number?`)

 if(userAnswer == numbers [numbers.length-1]){
    alert('You right!!!')
}else{
    alert(`Wrong answer, right number is ${numbers[numbers.length-1]}`)
}

let randomIndex = parseInt(Math.random() * numbers.length);

userAnswer = +prompt(`What was the ${randomIndex + 1} number?`);

if(userAnswer == numbers [randomIndex]){
    alert('You right!!!')
}else{
    alert(`Wrong answer, right number is ${numbers[randomIndex]}`)
}*/

// Task 2
let num1 = +prompt('enter first number')
let num2 = +prompt('enter power of the number')

function powerNumber(num1, num2) {
    let powerNumber = num1 ** num2;
    return powerNumber
}

let result = powerNumber(num1, num2);
alert(powerNumber(num1, num2));

// Task 3
const numbers = [2, 4, 6, 10, 12];

function sumNumbers(numbers) {
    let sum = 0
    for (let number of numbers) {
        sum += numbers[number];
    }
    return sum;
}

// Task 4
const numb = [];

for( i = 0; i < 5; i++){
    numb[i] = i +1
}

function reversArray(numbers){
     for( i = 5; i > 0; i--){
         numb[i] = i - 1;
         console.log(numb)
     }
}

console.log(numb)
console.log(reversArray(numbers))
