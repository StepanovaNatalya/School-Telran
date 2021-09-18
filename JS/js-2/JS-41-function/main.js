const numbers = [1,2,3,5];

function printArray(array){           // функция только для любого массива
     for(let i = 0; i < array.length; i++){  
          console.log(array[i])
     }
}

printArray(numbers);
//-------------------------------------

const numbers = [1,2,3,5];

function printNumbers(){           // функция только для массива numbers
     for(let i = 0; i < number.length; i++){
          console.log(number[i])
     }
}

printArray();
//-------------------------------------

function displayItems(items){
     for(let item of items){
         console.log(item)
     }
}

displayItems(numbers);

////////////// function constructor //////////////////////

/* const user1 = {
    name: 'Vasya',
    lastName: 'Ivanova',
    age: 32,
    hello: function(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

const user2 = {
    name: 'Kolya',
    lastName: 'Nikolaev',
    age: 26,
    hello: function(){
        console.log(`Hello, my name is ${this.name}`)
}
} */

function User(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.hello = function(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

const user1 = new User('Vasy', 'Ivanov', 35);
user1.hello();

const user2 = new User('Kolya', 'Nicolaev', 25);
user2.hello();
console.log(user2);

const array = new Array(3);
const str = new String('hdajdas');
const date = new Date();

User.prototype.goodBye = function(){
    console.log(`User ${this.lastName} say dood bye!`)
}

User.prototype.isHuman = true;

user1.goodBye();
user2.goodBye();

user1.getFullName = function(){
    console.log(`My full name is ${this.name} ${this.lastName}`)
}

user1.getFullName();

console.log(user1.isHuman);
console.log(user2.isHuman);


