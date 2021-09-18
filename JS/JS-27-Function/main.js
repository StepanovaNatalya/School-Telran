/* Функция, которая накапливает числа, вводимые пользователем, как только ввод будет не число, вывести сумму всех введенных до этого чисел*/

function doSomethingWithInputArray(doSomething) {
    let numbers = [];
        sum = 0;

    while (true) {
        const userNumber = prompt('Enter the number, please');
        if (userNumber === '' || userNumber == null || isNaN(userNumber)) {
            break;
        }
        numbers.push(+userNumber)
    }

    return doSomething(numbers);
}

function sum(array){
    if (array.length == 0) {
        return 'not count';
    }
    let sum = 0
    for (let el of array) {
        sum += el;
    }
    return sum;
}

function changeElementInArray(array){
    /*let newArray = [];
    for(let number of array){
        newArray.push(number *=2)
    }*/
    return array.map(num => num *2)
}

//alert(sumInput());
alert(doSomethingWithInputArray(sum));
alert(doSomethingWithInputArray(changeElementInArray));
alert(doSomethingWithInputArray(function(array){
    return `your input is${array.join('/ ')}`
}));
alert(doSomethingWithInputArray(array => `your input is ${array.join('/ ')}`));
alert(doSomethingWithInputArray(array => array.map(num => num += 3)));
alert(doSomethingWithInputArray(array => array.filter(item => item %2 ==0)));
alert(doSomethingWithInputArray(array => array.reduce((sum, item)=> sum + item)));



let arr = [1,2,10,12,3,8,11];

let names = ['Vasya', 'Anna', 'Vitaliy', 'Yulya', 'ana'];

console.log(names);
console.log(names.sort());
console.log(names);

arr.sort();
console.log(arr);

arr.sort((a,b) => a - b);
//arr.sort(compare);
console.log(arr)

function compare(a,b){
    if(a > b) return 1;
    if(b > a) return -1;
    if(a == b) return 0;
}

function compare(a,b){
    return a > b ? 1 : a < b ? -1 : 0;
}

function compare2(a,b){
    return a - b;
}