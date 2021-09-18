const str = 'hello!\n\'world\' \u{1F60D}' //"hello!", `hello!`

let str2 = `hello world!`

/*let str2 = `hello
world! 
*------*` */

/*console.log(str2)
console.log(str); */

console.log(str2[str2.length - 1]); //!
str2[0] = 'H';
console.log(str2[0]);

    /*console.log(str[3]);  //l
console.log(str[0]);  //h

console.log(str.length)  //17 */

console.log(str2);

str2 = 'Hello world wow!';
console.log(str2);

const numbers = [1,2,3,4,5];
numbers[0] = 5;

console.log(numbers)

console.log(str2.charAt(6)) //w

str2 = str2.toUpperCase();  //HELLO WORLD!
console.log(str2); 

str2 = str2.toLowerCase(); //hello world!
console.log(str2);

console.log(str2.indexOf('w'));    //6
console.log(str2.indexOf('w', 7)); //12
console.log(str2.indexOf('wa'));   //-1 - это означает сочетание такое не встрет.сь
console.log(str2.lastIndexOf('w'));//14

console.log(str2.startsWith('he')) //true
console.log(str2.endsWith('!'))  //true
console.log(str2.includes('wor')) //true  - it is center
console.log(str2.includes('WOR')) //false

console.log('--------------------------')
console.log(str2.slice(6, 11));   //[6 , 11)  

let str3 = str2.slice(-6, -2)  //d wo
console.log(str3);
console.log(str2.substring(11,6)) //world
console.log(str2.substr(6, 3))  // from 6 +3

str2 = str2.replace('e', 'a');  //hallo world wow!
console.log(str2);

str2 = str2.replaceAll('w', 'W') //hallo World WoW!
str2 = str2.replaceAll('wo', 'WO') //hallo WOrld WOw!
str2 = str2.replaceAll('w', 'wwwww') //hallo wwwworld wwwwowwww!
console.log(str2);

let names = 'Ivan, Anna, Vasya, Olya, Petya';
let nameArray = names.split(' ,')
console.log(nameArray[0], nameArray);

const arrayLetters = 'apple'.split('');
console.log(arrayLetters);

//Arrays
let num = [1,2,3,4];

//delete num[1];

num.splice(1,2,3,4,5,6,7,8)  //[1,2,5,6,7,8]

console.log(num);

const num1 = num.slice(1,3); //[5,6]

num.splice(1,1);  // [1,3,4]

console.log

const newNums = num.concat(num1, 6,7, num1); // [[1,5,6,7,8,4][5,6][1,3,4]]

num.forEach(item => console.log(item*2));

num.forEach((item, index, array) => console.log(`${item} has index ${index}, in ${array}`))

let users = [
    {id:1, name: 'Vasya'},
    {id:2, name: 'Vasya'},
    {id:3, name: 'Vasya'},
]

let user = users.find(item => item.id == 1);   //id == 1

console.log(user) // { id: 1, name: 'Vasya' }

let usersWithLongName = users.filter(user => user.name.length >=5);
console.log(usersWithLongName) //[{ id: 1, name: 'Vasya}, { id: 3, name: 'Vanya'}]

num = [1,2,3,4];

let nemNumbers = num.map(num => num * 2);  //[2,4,6,8]
console.log(nemNumbers)

const cites = ['Berlin', 'London', 'Paris', 'Moscow'];
const citiesLenght = cites.map(city => city.length) //[6,6,5,6]

num = [1,2,3,4,5];
let result = num.reduce((sum, current) => sum + current, 10); //25

let strings = ['one', 'two', 'three'];
result = strings.reduce((str, s)=>str + ' ' + s); //one two three


