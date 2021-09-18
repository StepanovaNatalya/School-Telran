/* const obj = {
    number:5,
    sayNumber: function(){
        console.log(this)
        console.log(this.number)
    }
} */

const obj = {
    number:5,
    sayNumber: function(){
        // console.log(this)
        // console.log(this.number)
        say = () =>{
            console.log(this);
            console.log(this.number)
        }
        say();
    }
}

obj.sayNumber();

function doSomthing(...numbers){    // rest operator
    console.log(numbers)
}

doSomthing(1,2,3,4,5,6);

///// spred oper ///////

const arr = [1,24,3,4,51,6];
                        // const newArr = arr; -> две ссылки на один массив
const newArr = [...arr];

const arr2 = [3,17,81,12];

const res = Math.max(6, ...arr, 101, ...arr2, 88);  // spred operator
console.log(res);

//-------------------------

const user = {name: 'Vasya', age: 25};
const userNew = user;                       //

const user1 = {...user, name: 'Kolya', isMarried: false};
// userNew.name = 'Kolya';

console.log(user)
console.log(user1)  // peresapisivaet
//-------------------

const myUser = {
    name: 'John',
    password: '12345',
    rights: 'user'
}

const admin = {
    password: 'root',
    rights: 'admin',
    age: 18
}

// const userAdmin = Object.assign({},myUser, admin)

const avatar = 'photo'

const userAdmin = {...myUser, ...admin, avatar}

console.log(userAdmin)
console.log(myUser)

//------------------

const x = 25, y = 10;

const coordinats = {x, y,calc(){console.log(this.x * this.y)}}
 coordinats.calc()

 ///// destructurisation ///////////

const client = {
    name: {
        first:'Jack',
        last: 'Smith'},
    password: '12345',
    rights: 'user'
}

const{name:{first, last}, password, rights} = client;

console.log(first,last)  // Jack Smith

//------------------

function prinDate(client){
    console.log(`Client name: ${client.name}, password: ${client.password}, right: ${client.rights}`)
}

const newClient = {
    name: 'Ivan',
    password: '12333567',
    rights: 'user'
}

function prinShortDate({name, password, rights = 'unknow'} = {}){
    console.log(`Client name: ${name}, password: ${password}`)
}

prinDate(newClient);
prinShortDate()

//--------destr. massive -------------

const numbers = [1,3,4,6,7,8,9];

const[a,,b, ...c] = number;
console.log(a,b,c) // 1,3,[4,6,7,8,9]
console.log(c) // [6,7,8,9]
console.log(b) // 4

const numbers2 = [[5,6],[7,8]]
const [[,y],[z,t]] = numbers2;
console.log(y)

const id = 'user_1';
// const userId = id.split('_')[1]
const [,userId] = id.split('_');
console.log(userId)  // 5
//--------------------------

const country = {
    name: 'England',
    population: 2000000,
    genger:{
        male:['15%', '40%'],
        female: ['16%', '29%']
    }
}

const {genger:{male:[, maleAdult]}} = country;

console.log(maleAdult)

const {gender:{female:[femaleUnder18]}} = country;

console.log(femaleUnder18)