//let arr = new Array();

       //     [0]     [1] [2] [3]     [4]            [5]
let arr = ['plum.png', 1, {}, [], 'orange.png', 'apple.jpg'];

console.log(arr[0]);
console.log(arr.length);

/* arr[99] = 0;
console.log(arr.length)
console.log(arr) */

arr[arr.length] = 'banan.jpg'; //  arr[6] = 'banan.jpg';   //add
console.log(arr)

arr.length = arr.length-1;
console.log(arr);

/* arr.length = 0;
console.log(arr); */

// [2] [3] [4] [5]
// arr[0]='banan.jpg


//add [0-banan]
for(let i = arr.length; i > 0; i--){
    arr[i] = arr[i-1]
}

arr[0] = 'banan.jpg';
console.log(arr);

//delete [0-banan]
for( let i = 0; i<arr.length; i++){
    arr[i] = arr[i+1];
}

arr.length = arr.length - 1;
console.log(arr);

arr.push('banan.jpg', 23, 'melon.jpg');    //добавляем в конец
console.log(arr);

let melon = arr.pop();  //отрезает конец и отделяет в let
console.log(arr);
console.log(melon);

arr.unshift(25, 30);
console.log(arr);

let number = arr.shift();
console.log(arr, number);

let numbers = [1,2,3,4,5];

for(let i = 0; i < numbers.length; i++){
    if(i!=0){
     console.log(numbers[i]*2);
     }
     }

   console.log('------------------')  

for(let number of numbers){
    if(number%2==0){
    console.log(number + 5);
    }
}  

let res = '';

//1 2 3 4 5 6 7 8 9 10
//2 4 6 8 10 12 14 16 18 20

for(let i = 1; i <= 10; i++){
    for(let j = 1; j<=10; j++){
        res += (j*i + '\t')  // 1 2 3 4 5 6 7 8 9 10
    }
    console.log(res);
    res = ''
}

let matrix = [
    [1,2,3],   //0
    [4,5,6],   //1
    [7,8,9]    //2
]

console.log(matrix[1][1]);
//                  [*1]
let pifagorTable = [[], [], [], [], [], [], [], [], [], []]