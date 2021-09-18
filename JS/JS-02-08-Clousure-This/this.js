//'use strict'

/* function showThis(){
    console.log(this)
}

showThis(); */

//---------------

/* 
1. Для любой обычной функции this = window (при нестрогом режиме), underfind - при использовании 'use strict'
2. Контекст у методов объекта будет сам объект;
3. This в функциях-конструкторах относится к создаваемому (новому) экзимпляру объекта;
4. Ручная привязка this call, apply, bind;

*/

function sumNumber(a,b){
    console.log(this);
    function sum(){
        console.log(this);
        return a + b
    }
    console.log(sum())
}

sumNumber(5,6);

const object = {
    a: 20,
    b: 14,
    sum: function(){
        console.log(this.a + this.b);
        function more(){
            console.log(this)
        }
        more();
    }
}

oblect.sum()

function User(name, id){
    this.name = name,
    this.id = id,
    this.hello = function(){
        console.log(`Hello, ${this.name}`)
    }
}

//const user = new User('Vasya', 1);

function sayName(){
    console.log(this);
    console.log(this.name)
}

const user = {
    name: 'Join'
}

//sayName();
sayName.call(user);
sayName.apply(user)

