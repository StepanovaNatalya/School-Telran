function showMessage(from, text){
    if(text === undefined){         //starii variant do 6-js
        text = 'text not added'  
    }
    console.log(`${from}: ${text}`)
}

showMessage('Vasya', 'Nice to meet you!');

showMessage('Hello');
//----------------------------------

function showMessage(from ='no name', text = 'empty tetx'){
    console.log(`${from}: ${text}`)
}

showMessage();
//-----------------------------------

function calc(a=2, b=3){
    return a + b;
}

console.log(calc());
console.log(calc(5));
console.log(calc(4,5));
//----------------------------------

const arr = [1,2,3];

function printArray(array = arr){
    console.log(array)
}
//////////////////// Arrays Destructurisation ////////////////

const arrayName = ['Vasya', 'Pupkin', 'Driver'];
let [firstName, , profession] = arrayName;

firstName = firstName.toUpperCase()

console.log(firstName);
console.log(profession);
//----------------------------------

let [red, black, ...colors] = ['red', 'black', 'yellow', 'gren', 'white'];

console.log(colors);
//-----------------------------------

let [firstName = 'quest', lastName = 'anonymous'] = ['Vasya'];
console.log(firstName, lastName);  // Vasya anonymous

/////////////// Object Destructurisation //////////////////////

const object = {
    title: 'box',
    color: 'black',
    material: 'wood',
    size:{
        width: 200,
        height: 200,
        length: 200
    }
}

console.log(object.title);  //box

const{title, color, material} = object;

console.log(material);  // wood
//-------------------------------

const{material, color: boxColor} = object;
console.log(material);   //wood

console.log(material); //wood
console.log(boxColor); //black
//-------------------

console.log(size)

const object2 = object;

object2.color = 'red';
console.log(object.color)  //red
//-------------------

size.height = 250;
console.log(object.size.height); //250
//-------------------

const object2 = {...object};
//----------------------

let material, size;           

({material, size} = object);
//--------------------------------------

const complexObject = {
    size:{
        width: 100,
        height: 200,
    },
    items: ['Apple', 'Orange', 'Melone'],
    fill: true
}

const{
    size:{width, height},
    items:[f1,f2,f3],
    fill: isFill
} = complexObject;

console.log(isFill);   // true

//---------------------

const size = {...object.size};

///////////// Recursion ///////////////////

// Factorial 5! = 5*4*3*2*1   -> 4!*5
//           4! = 4*3*2*1     -> 3!*4
//           3! = 3*2*1       -> 2!*3
//           2! = 2*1         -> 1!*2
//           1! = 1           -> 0!*1
//           0! = 1           -> 1

function recursiveFactorial(n){
    if(n == 0){
        return 1;
    }else{
        return recursiveFactorial(n-1) * n;
    }
}