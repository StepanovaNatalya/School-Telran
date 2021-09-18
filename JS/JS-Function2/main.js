let numbers = [1,2,3,4,5];

console.log(numbers.reverse());
console.log(numbers);

let names = 'Ivan, Anna, Olya';
let namesArray = names.split(', '); // ['Ivan', 'Anna', 'Olya']
console.log(namesArray);

console.log(namesArray.join('-'))  // Ivan-Anna-Olya
//console. log(str);   

console.log(str.split('').reverse().join(''));  //aylO-annA-navI
console.log('abcd'.split('').reverse().join('')); // dcba

const letters = ['b', 'c', 'd', 'f', 'a', 'A', 'C'];
letters.sort();
console.log(letters) // ['A', 'B', 'a'; 'b','c','d','f']

numbers = [2,7,1,11,15,20,21];
numbers.sort();
console.log(numbers); //[1, 11, 15, 2, 20, 21, 7]

// Object

const user = {
    name: 'Vasya',
    age: 32,
    isMarries: true
}

const keys = Object.keys(user);
console.log(keys)   // ['name', 'age', 'usMarried']

console.log(keys.length)  //3
console.log(Object.values(user));  //['Vasya', 32, true]

console.log(Object.entries(user)); // [['name', 'Vasya'], ['age', '32'] ['isMarried', 'true']]

const prices = {
    banana: 1,
    orange: 2,
    fish: 4
}

// [[banana, 1], [orange, 2], [fish, 4]]

let doublePrice = Object.entries(prices).map(([key, value])=>[key, value * 2]);
 console.log(doublePrice);  // [['banana', 2],['orange', 4],['fish', 8]]
 doublePrice = Object.fromEntries(doublePrice);
 console.log(doublePrice);  //   from Massive to Object

 // References and Object copy

 let a = 10;
 let b = 20;

 function doSomthing(a,b){
     a *=a;
     console.log(a);
     b/=4;
     console.log(b);
 }
 doSomthing(a,b);

 console.log(a,b);

 let array = [1,2,3,4,5];

 array.forEach(num, index, array => array[index] = num * 2);

 function changeArray(arr){
     /*for(let i = 0; i<arr.length; i++){
         arr[i] = arr[i] * 2;*/
         for (let num of arr) num *= 2;
      //}
 }

 //changeArray(array);
 console.log(array); 

 const user1 = {
     name: 'Vasya',
     age: 32,
     isMarried: true,
 }

 const user2 = user1;

 user2.name = 'Petya';
 console.log(user1)  //Petya
 console.log(user2)  //Petya

 const oldArray = ['a', 'b', 'c'];
 const newArray = oldArray.slice();
 const newArray = [...oldArray];

 newArray[3] = 'd';

 function copyObject(object){
     const objCopy = {};
     for(let key in obj){
         objCopy[key] = obj[key]
     }
     return objCopy;
 }

 const numbers = {
     a:2,
     b:3,
     c:5,
 }

 const copyNumbers = copyObject(numbers);

copyNumbers.a = 10;
copyNumbers.c.x =10;
 copyNumbers = 10;
 console.log(numbers);
 console.log(copyNumbers);

 const copyNum = Object.assign(numbers, {e: 12});
 console.log(copyNum);

 // Spread operator

 const userName = ['Anna', 'Vasya', 'Kolya'];
 const cities = ['Berlin', 'Paris', 'Tokio'];
 const all = [...userNames, ...cities, 'I like it'];

 console.log(all)

 function log(a,b,c){
     console.log(a);
     console.log(b);
     console.log(c);
 }

 const nums = [2,5,7]
 log(...nums);

 const messages = ['hello', 'nice to see you', 'good bye!', 'kuku'];

 log(...messages);