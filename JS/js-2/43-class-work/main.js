// Array Task

/* 1. создать новый массив юзеров старше 20 лет
2. создать массив юзеров ниже 150
3. добавить в существующий массив уникальные id для каждого юзера
4. вернуть юзера с самым длинным именем
5. вернуть массив -> ['Vasya, age: 15 years old, height: 180 cm', ...]
6. [Vasya Vasilev, Petya Petrov] -> [{firstName: 'Vasya', lastName:'Vasiliev'},{}] (2 способа)
7. написать функцию fillArr(5, 'hello') -> ['hello', hello',hello',hello',hello]
8. написать функцию changeString ('abcdef') -> 'aBcDeF'
9. написать функцию countItem(array, el) -> сколько раз элемент повторяется в массиве
10. функция clearArray([1,2,3, null, '', undefined, 5, NaN, 7]) ->[1,2,3,5,7] */

const users = [
    { name: 'Vasya', age: 15, height: 180 },
    { name: 'Petia', age: 20, height: 160 },
    { name: 'Vlada', age: 25, height: 149 },
    { name: 'Stepan', age: 16, height: 190 },
    { name: 'Boris', age: 45, height: 176 },
    { name: 'Masha', age: 32, height: 135 }
]

//Task 1------------------

const usersOldest20 = users.filter((user) => user.age > 20);
console.log(usersOldest20);

//Task 2------------
const usersSmall = users.filter(user=> user.height < 150);
console.log(usersSmall);

//Task 3----------
users.map((user, index) => user.id = index +1)

const usersWithId = users.map((user, index) => user.id = index + 1)
console.log(usersWithId);

//Task Map
const usersN = users.map((user) => user.age > 20 ? {...user, statistic: 'yes'}:{...user, statistic:'no'})
console.log(usersN);
//task 3
users.map(user => user.id = new Date().getTime());
console.log(users)

//Task 4--------
const user = users.reduce((user, user1) => user.name.length > user1.name.length ? user : user1);

//Task 5-------
const usersString = users.map(user=> `${user.name}, age: ${user.age} years old, height: ${user.height} cm`);

//Task 6----
const people = ['Vasya Ivanov', 'Kolya Petrov'];
//const peopleNew = people.map(p=>({firstName: p.split(' ')[0], lastName: p.split(' ')[1]}));
const peopleNew = people.map(p => p.split(' ')).map(p =>({firstName: p[0], lastName: p[1]}));
console.log(peopleNew);

//Task 7----------
function fillArray(num, item){
    const arr = new Array(num);
    return arr.fill(item)
}
console.log(fillArray(3, 'hello'))

//Task 8-----------
function changeString(str){
    //return str.split('').toLowerCase().map((el, index) => index%2 !==0 ? el.toLowerCase() : el)
    return str.split('').map((el, index) => index%2 ==0 ? el.toUpperCase() : el.toLowerCase()).join('');
}

console.log(changeString('sakHHnxZZ'));

//Task 9---------
function countEntries(array, item){
    return array.reduce((count, el) => el === item ? count+1 : count, 0)
}

console.log(countEntries([10,2,5,8,9,5,10], 10))
console.log(countEntries(['one', 'a', 'a', 'c'], 'b'));

// Task 10-------------
function clearArray(arr){
    return arr.filter(el => el)
}

//console.log(clearArray([1, 2, 3, null, '', undefined, 5, NaN, 7]))
const array = [1, 2, 3, null, '', undefined, 5, NaN, 7];
const clearArr = clearArray(array);
console.log(clearArr)