//Task 02

//1. Метод изменить строку
// 'background-color' -> backgroundColor;
// 'list-style-image' -> listStyleImage;

    let str = 'background-color';
    console.log(str);
    str = str.replaceAll('-c', 'C');
    console.log(str)

    let str2 = 'list-style-image';
    console.log(str2);
    str2 = str2.replaceAll('-s', 'S').replaceAll('-i', 'I');
    console.log(str2);

    function showMessage(){
    let str3 = prompt('enter a word');
    
    
    for(let i = 0; i < str.length; i++){
         if (str3[i] === '-'){
              str3.replaceAll('-', '');
            
         }
         console.log(str3)
         return str3;
    }
    }
    showMessage();
    
//2. Метод найти среднее арифметическое значение массива чисел

let num = prompt('enter numbers');
num = []

function calcMiddle(){
    let middleNum;
    
    for(let i = 0; i < num.length; i++){
        sum += i; 
       middleNum = sum / (num.length - 1);
    }
    return middleNum;
}

calcMiddle(console.log(middleNum));

//3. Factorial (5! -> 5 * 4 * 3 * 2 * 1)

