
let myName = 'Vasya';

function sayHello(){
    myName = 'Anna'
    console.log(`hello, ${myName}`)
}

sayHello();
myName = 'Kolya';

sayHello();

//---------------------------

let myName;

function getMessage(){
    myName = 'Petya';
    return function(){
        console.log(myName)
    }
}

myName = 'Vasya';

let message = getMessage();  //function(){ console.log(myName)}
message();
//---------------------------

function makeCounter(){
    let count = 0;

    return function(){
        return count++;
    }
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log('-----------------------')

counter = makeCounter();   // const counter1 = makeCounter();
console.log(counter());

//------------------------------------

function makeUserId(){
    let userIdFunction = [];
    let i = 0
    while(i < 5){
        let userId = function(){
            console.log(i)
        }
        userIdFunction.push(userId);
        i++
    }
    return userIdFunction;
}

const userId = makeUserId();

userId[0]();
userId[3]();

//--------------------------------

function makeUserId(){
    let userIdFunction = [];
    // let i = 0
    for(let i = 0; i < 5; i++){
        let userId = function(){
            console.log(i)
        }
        userIdFunction.push(userId);
        i++
    }
    return userIdFunction;
}

const userId = makeUserId();

userId[0]();
userId[3]();

/////////// Prototype ////////////////////
let str = 'some string';
const strObject = new String('another string');

console.log(typeof str);
console.log(typeof strObject);

console.log('abcd'.toUpperCase())

console.dir([1,2,3]);

const cat = {
    feet: 4,
    tail: 1,
    ears: 2,
    voice: function(){
        console.log('meow-meow')
    }
}

const barsik = {
    color: 'black',
    age: 2,
}

//barsik.__proto__ = cat; -> deprecated

console.log(barsik);
//console.dir(barsik);

barsik.voice();
console.log(barsik.tail)

Object.setPrototypeOf(barsik, cat)  //статический способ

const musik = Object.create(cat);  //динамический способ
// murzik.color = 'white'
// murzik.age = 3
// const murzik = Object.create(cat, {color:{value: 'white'}, age:{value: 4}});

///////////// function Constructor /////////////////

function User(name, id){
    this.name = name,
    this.id = id,
    this.human = true,
    this.say = function(message){
        console.log(`${name} say: ${message}`)
    }
}

const user1 = new User('Vasya', 1);
user1.say('Hello!')

user1.age = 32;

User.prototype.goodBye = function(){
    console.log(``)
}