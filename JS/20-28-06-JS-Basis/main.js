//===============Types conversion====================

//Number

let str = '   123   ';  // ' 12 ', '90 ', 12.5 '

//str = Number(str);
//str = +str;
str = parseInt(str);

console.log(typeof str);
console.log(str);

str = 'one';
str = Number(str);
console.log(str);

str = Null;
//str = Number(str);  //0
str = perseInt(str); //NaN

console.log(str);

//str = false; //0   
str = true; //1

console.log(+str);
console.log(parseInt(str));

str = underfined;

console.log('-------------------------------')
console.log(+str);
console.log(parseInt(str))

//-----------------------------------------------------------
//String

let value = true;
console.log('--------------------')
console.log(typeof value);

//value = String(value);  //value = '' + value;

console.log(typeof value);

//false ->'false', null -> 'null', underfined -> 'underfined', 123 ->'123'

//----------------------------------------------------------------
//Boolean
console.log('------------------');
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean(-5)); //true
console.log(Boolean('hello')); //true
console.log(Boolean('')); //false
console.log(Boolean(null)); //false
console.log(Boolean(underfined)); //false

//===================Comparison operators===================

//a > b, a < b
//a >= b, a <= b
//a == b , a === b
//!= не равно

console.log('---------------------------')
console.log( 5 < 3);  //false
console.log( 5 != 3);  //true

let isBigger = 5 > 4;
console.log('isBigger: '+ isBigger); //isBigger: true

console.log('-----------------------------');
console.log('a' > 'q');  //false
console.log('cat' > 'cad'); //true
console.log('cat' > 'cats');  //false
console.log('cat' > 'Cat'); //true
console.log('ABC' == 'ABCd') //true

console.log('--------------------------');
console.log('2' > 1);

let num1 = 42;
let num2 = '42';

console.log(num1 == num2); //true
console.log(num1 === num2); //false Совпадение должно быть 100%

num1 = 0;
str = '';
let result = false;

console.log(num1 == str) //true
console.log(num1 == result) //true
console.log(str == result) //true

console.log(null == underfined) //true

console.log('-------------------------')
console.log(null > 0); // false
console.log(null == 0)  // false
console.log(null >= 0); //true

//-------------------------------------------------

//======================Conditional operators==================

//if, if else, ?
//num1 = +prompt('enter number');
//num2 = +prompt('enter second number');

/*if(num1 > num2){
    var max = num2;
    alert ('Max number is: ' +max);
}else if (num1 === num2){
    alert('numbers are equal');
    //max = num1;
}
else {
    max = num2;
    alert ('Max number is: ' + max)
}

alert('Programm ended');*/

let max = num1;

/*if(num1 < num2){
    max = num2;
}*/

if(!num1 > num2){
    max = num2;
}

//alert ('Max number is' + max);

if (0){
    console.log('Hello!')  //false
}

if (!0){
    console.log('Hello!')  // Hello
}

if (1){
    console.log('Hello!')  // Hello
}

if(''){
    console.log('world')   //false
}

if(' '){
    console.log('world')   //world
}

let isFieldChecked = true;

if(isFieldChecked) console.log('field is checked');

/*let isAcessAllowed;
let age = +prompt('enter your age, please');*/

/*if(age >= 18){
    isAcessAllowed = true;
}else{
    isAcessAllowed = false;
}*/

//isAcessAllowed = (age >=18) ? true : false;

/*if(age <= 3){
    alert('Hi, small one!');
} else if(age <= 20){
    alert('hi, middle one')
} else if(age <= 100){
    alert('hello madam or sir')
} else{
    alert('hello, lucky one')
}*/

/*let message = (age <=3) ? 'Hi, small one!' : 
              (age <=20) ? 'Hi,middle one!' : 
              (age <=100) ? 'Hello madam or sir' : 'Hello, lucky one';*/
//alert(message);

//alert((5>3) ? 'yes' : 'no');

//switch

/*switch(x){
    case 'one':
        alert ('Hello!');  // if(x==='one')
    case 'two':
        alert ('Good bye!'); // if(x==='two')
    default:
        alert('nice to meet you!')        
}*/

let sumNumber = +prompt('2 + 2 = ?');

/*switch(sumNumber){
    case 3:
        alert('too little');
        break;
    case 5:
        alert('too much');
        break;
    case 4:
        alert('bingo!');
        break;
    default:
        alert('try again');            
}*/

/*switch(sumNumber){
    case 2:
    case 3:
    case 5:
        alert('wrong answear, try again');
        break;
    case 4:
        alert('bingo!');
        break;
        default:
            alert('try again!')    
}*

/* let userName = prompt('enter your name');
switch(userName){
    case 'Lena':
        alert('Hi, Lena');
    case 'Vasya':
        alert('Hi, Vasya!');
        break;
        default:
            alert("I don't know you!")    
} */

//=============Logical operator==================

// || -> or, && -> and, ! -> not

let hour = 11;

if(hour < 10 || hour > 18){
    console.log('shop is closed');
}

//false || false -> false
//true || false -> true
//false || true -> true
//true || true -> true

hour =12;
let munute = 30;

if(hour === 12 && minute === 30){
    console.log('The time is 12:30');
}

//true && true -> true;
//true && false -> false;
//false && true -> false;
//false && false -> false;

console.log(isFieldChecked)
console.log(!isFieldChecked)

//==============Confirm==============

let isWeekend = confirm('Is a weekend now?');

alert(isWeekend);


