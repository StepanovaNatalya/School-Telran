//Number

let billion = 1e9; //100 000 000

let bigNumber = 7.3e9;  //730000 0000

let ms = 3e-3;     //1e-6 -> 0.000001;

console.log(billion);
console.log(bigNumber);
console.log(ms);

console.log(1 + 5e-5);

console.log(0xff);     //255   // 0 - 16 a b c
console.log(ob11111111);    //255     //  01 10 11 100
console.log(0o377);  // 1 2 3 4 5 6 7 8 -> 

let num = 255;
num = num.toString()
console.log(num.toString(16))  //ff
console.log(num.toString(2))   //1111111

Math.randomRangeArray = function(arraySize, numberRange) {
        let array = [];
        for (let i = 0; i < arraySize; i++) {
            array.push(parseInt(Math.random() * numberRange));  // array[i] = getRandomRangeNumber(range)
        }
        return array;   
}

const arr = Math.randomRangeArray(4, 10);
console.log(arr);

let sum = 0.1 + 0.2;   
console.log(sum.toFixed(2));

console.log(9999999999999999);  //1000000000000000

console.log(123456..toString(2)); //1111000100100000
console.log(12.2345.toFixed(2)) //12.23

num = '2px';
console.log(typeof num);
//num = Number(num);
num = parseInt(num);
console.log(typeof num);
console.log(num);

num = '22.24.34 px';
num = parseFloat(num);

num = '111101';
console.log(parseInt(num, 2))   //61

console.log(1.35.toFixed(1)); // 1.4
console.log(6.35.toFixed(1)); // 6.3

function randomInteger(min, max){
    return Math.floor(min + Math.random() * (max - min))
}

//((max + 0.5) - (min - 0.5) ) -> max + 0.5 - min + 0.5 -> max - min + 1

num = randomInteger(1,4);
console.log(num)

// 0.5 - 1.499999 -> 1
// 1.5 - 2.49999 -> 2
// 2.5 - 3.49999 -> 3

// Math.floor -> 3.1 -> 3.0;
// Math.ceil -> 3.1 -> 4.0;
// Math.round -> 3.1 -> 3.0; 
               //3.6 -> 4.0;
// Math.trunc -> 3.1 -> 3.0;
               //3.7 -> 3.0;

const person = {
    name: 'Vasya',
    age: 32,
    isMarried: true,
    say: function(){
        console.log('hello!');
    }
}

person.say();