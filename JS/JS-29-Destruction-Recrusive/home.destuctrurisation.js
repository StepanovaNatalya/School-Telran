// Task 1
/* n = 10
function recusionQutput(n) -> '12345678910'
 */

/* function recusionQutput(n) {

    if (n == 1) {
        return '1 ';
    } else {
        return recusionQutput(n - 1) + n + ' ';
    }

}

console.log(recusionQutput(7)); */


function recusionQutput(n) {

    return (n == 1) ? '1 ' : recusionQutput(n - 1) + n + ' ';
}

console.log(recusionQutput(15)); 


//--------------------------------------------------
// Task 2
/* 'abba'
  function checkPolindrom('nagan') -> true;
           checkPolindrom('gvzftz') -> false
 */
str = 'nagan'
// -----------variant 1

function checkPolindrom(str) {

    str = str.replaceAll(' ','');
    return str == str.split('').reverse().join('')
}

console.log(checkPolindrom(str))

//-------- varint 2
function checkPolindrom(str) {
	let arr = str.replaceAll(' ', '').split('');
	for (let i = 0, j = arr.length - 1; i < j;) {
		if (arr[i++] == arr[j--]) continue
		return false
	}
	return true
}
console.log(checkPolindrom('а роза упала на лапу азора'))
console.log(checkPolindrom('а роза упала н лапу азора'))
function checkPolindrom2(str) {
	str = str.replaceAll(' ', '')
	return str == str.split('').reverse().join('')
}
console.log(checkPolindrom2('а роза упала на лапу азора'))
console.log(checkPolindrom2('а роза упала н лапу азора'))



//------------------------------------------------
//Task 3
/* метод, который получает массив вида users возвращает массив вида changeUsers.

    const users = [
        {firstName: 'Vasya', lastName: 'Pupkin', id: 1},
        {firstName: 'Vas', lastName: 'Pupk', id: 2},
        {firstName: 'Sasha', lastName: 'Vasin', id: 3},
    ]

    changeUsers -> [
        {fullName: 'Vasya Pupkin', id: 1},
        {fullName: 'Vas Pupk', id: 2},
        {fullName: 'Sasha Vasin', id: 3},
    ]
 */

const users = [
    { firstName: 'Vasya', lastName: 'Pupkin', id: 1 },
    { firstName: 'Vas', lastName: 'Pupk', id: 2 },
    { firstName: 'Sasha', lastName: 'Vasin', id: 3 },
]

//-----variant 1---------------------
/* function changeUsers(array){
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push({
            fullName: array[i].firstName + ' ' + array[i].lastName, 
            id: array[i].id
        })
    }
    return newArray
} */

console.log(changeUsers(users))

// -------------variant 2 --------------------

/* function changeUsers2(array){
    const newArray = [];

    for(let user of array){
        const {firstName, lastName, id} = user;

        newArray.push({
            fullName: firstName + ' ' + lastName, 
            id
        })
    }
    return newArray
}

console.log(changeUsers2(users))
 */
//------------variant 3---------------------

function changeUsers3(array){
    const array.map(user => ({
        fullName: user.firstName + ' ' +user.lastName,
        id: user.id
    }))
}


console.log(changeUsers3(users))