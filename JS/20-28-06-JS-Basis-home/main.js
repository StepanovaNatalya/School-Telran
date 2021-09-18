// Task 1
/* Запросить два числа, посчитать их сумму.
   если, полученная сумма меньше 10 - вывести сообщение: "сумма слишком маленькая"
   если сумма больше 10 - вывести сообщение: "сумма слишком маленькая"
   если сумма равна 10 - "бинго!"
   выполнить задание с использованием if и с использованием тернарного оператора (?)*/

const number1 = +prompt('enter number');
const number2 = +prompt('enter second number');
const summe = number1 + number2;

const message = (summe > 10) ? 'to big summe' : 
                (summe < 10) ? 'to small summe' : 'bingo!';

//let message;

/*if(summe > 10 ){
    message = 'to big summe'
}else if(summe < 10){
    message = 'to small summe'
}else{
    message = 'bingo!'
}*/

alert(message);

// Task 2
/* Запросить у пользователя логин.
   если логин равен "employee", вывести сообщение: "Hi employee!"
   если логин - "boss", вывести сообщение: "Hello boss!"
   если логин пустой - "no login"
   во всех остальных случаях - "Hi user"
   выполнить задание с использованием if и с использованием switch*/ 
// --1-if----
let newMessage = 'Hi ';   
const login = String(prompt('enter your log in'));

if(login === 'employee' || login === 'Employee'){
    newMessage = newMessage + login + '!'  // newMessage += login + '!'  a = a + 5 -> a += 5
}else if(login === 'boss'){
    newMessage = 'Hello boss!'
}else if(login === '' || login === null){
    newMessage = 'no login';
}else{
    newMessage += 'user!'     //  newMessage = newMessage + 'user!'
}

alert(newMessage)

// --2-switch-----
/*if(login === null){
    newMessage = 'no login'
}else{}*/

switch(login){
    case 'employee':
        newMessage += login + '!';
        break;
    case 'boss':
        newMessage = "Hello boss!";
        break;
    case 'null':    
    case '': 
        newMessage = "no login";
        break;
    default:
        newMessage += "user!";            
}

// Task 3
/* Напишите условие для проверки, что переменная находится 
в диапозоне между 14 и 90 включительно.

Напишите условие для проверки, что переменная НЕ находится 
в диапозоне между 14 и 90 не включительно.*/ 
//--1--
let age = 30;

if(age >= 14 && age <= 90){
    console.log('access allowed');
}

//--2--
//--v-1--
if(age <= 14 || age > 90){
    console.log('access denied')
}

//--v-2--
if(!(age >= 14 && age <= 90)){
    console.log('access allowed');
}