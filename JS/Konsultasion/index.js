const user1 = {
    name: 'Vasya',
    age: 59
}, user2 = {
    name: 'Sonya',
    age: 25
}

function User(name, age){
    this.name = name
    this.age = age
    this.area = 'earth'
    this.sayHello = function(){
        console.log(`my name is ${this.name}`)
    }
}

const user3 = new User('Kolya', 35);
console.log(user1)
console.log(user3)

user3.sayHello()

class Client{
    constructor(name, age){
        this.name = name
        this.age = age
        this.area = 'earth'
    }
    sayHello(){
        console.log(`my name is ${this.name}`)
    }
}

const userNew = new Client ('Kolya', 25)
console.log(userNew)
userNew.sayHello()
