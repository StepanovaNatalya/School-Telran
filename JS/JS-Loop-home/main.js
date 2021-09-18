// Task 1
/* Конвертер валют
   Запросить у пользователя сумму в рублях
   Конвертировать эту сумму в евро и в доллары
   Вывести результат на экран.*/

const rubles = prompt('enter the amount, RUB');
const euroRate = 86.29;
const dollarRate = 72.83;

const rubToEuro = rubles / euroRate;
const rubToDollar = rubles / dollarRate;

if(isNaN(rubToEuro) || rubToEuro <= 0){
    if(rubles === null){
        alert('good bye!');
    }else
    alert('summe is not correct!')
}else{
    /*alert(rubles + ' rubles = ' + rubToEuro.toFixed(2) + ' Euro\n' 
        + rubles + ' rubles = ' + rubToDollar.toFixed(2) + ' Dollars\n' )*/
      alert(`${rubles} rubles = ${rubToEuro.toFixed(2)} Euro\n${rubles} rubles = ${rubToDollar.toFixed(2)} Dollars`)  
}

// Task 2
/* Найдите и выведите на экран сумму четных чисел от 2 до n. (n - число,
    получаемое от пользователя*/
//--1v--
let num = 10, sum = 0;

while(num > 1){
    if(num%2 == 0){   // нечетные условие (num%2 !=0 )
        sum += num
    }
    num--;
}

console.log(sum);

//--2v--
sum =0; num = 10

while(numw >= 1){
    sum = (num%2 != 0) ? sum +=num : sum;
    num--;
}

console.log(sum);
//--3v--
sum = 0; num = 10;

for(let i = 1; count <= num; i++){
    if(i%2 != 0) continue;
    sum +=i;
}

console.log(sum)
//--4v--
sum = 0; num = 10;

for(let i =1; i <= num; i++){
    if(i%2 == 0){
        sum +=i;
    }
}

//--5v--
sum = 0; num = 10;

for(let i = 2; i <= num; i+=2){
    sum += i;
}

console.log(sum)
// Task 3
/*Игра угадай число
     Случайным образом "загадать" число в диапозоне от 0 до 20
     Предложить пользователю угадать это число
          если введенный ответ больше загаданного числа - вывести 
сообщение: "загаданное число меньше"
          если ответ меньше - "загаданное число больше"
          если пользователь угадал - "поздравляю, вы выиграли!"
    У пользователя должно быть 3 попытки, после неудачной попытки должно
выводиться
    на экран предложение ввести число еще раз, в этом сообщение
указывается сколько попыток осталось.
    Если за три попытки пользователь не угадал число - вывести
сообщение: "Вы проиграли, число было: . . ."   */

const guessNumber = parseInt(Math.random() * 20);
console.log(guessNumber);
let userAnswer = prompt('Guess the number, my number biger as 0 and less 20\n to exit enter "q" ');
let maxTryCount = 3;
let tryCount;

//--1v--
for(let tryCount = 1; tryCount <=maxTrycount; tryCount++){
    if(userAnswer == 'q' || userAnswer == null){
        alert(`See you next time! Guess number ${guessNumber}`);
        break;
    }
    if(guessNumber == userAnswer){
        alert('You win!');
        break;
    }else if (userAnswer > guessNumber){
        alert('to big number!')
    }else{
        alert('to small number!')
    }
    if(tryCount != maxTryCount){
        userAnswer = prompt(`try again, enter new number.\nyou have ${maxTryCount - tryCount}, try more`)}
}

if(tryCount > maxTryCount){
     alert(`You loos! Guess number ${guessNumber}`);
}

//--2v--нужно докорректировать этот вариант
for(let tryCount = 1; tryCount <=maxTrycount; tryCount++){
    if(userAnswer == 'q' || userAnswer == null){
        alert(`See you next time! Guess number ${guessNumber}`);
        break;
    }
    if(guessNumber == userAnswer){
        //alert('You win!');
        break;
    }else if (userAnswer > guessNumber){
        alert('to big number!')
    }else{
        alert('to small number!')
    }
    /*if(tryCount != maxTryCount){
        userAnswer = prompt(`try again, enter new number.\nyou have ${maxTryCount - tryCount}, try more`)}*/
        userAnswer = prompt(`try again, enter new number.\nyou have ${maxTryCount - tryCount}, try more`)
}

if(tryCount > maxTryCount && guessNumber != userAnswer){
     alert(`You loos! Guess number ${guessNumber}`);
}

// --3v--
while(true){
    if(userAnswer == 'q' || userAnswer == null || maxTryCount == 0){
        alert{`See you next time! Guess number ${guessNumber}`};
        break;
    }
    if(maxTryCount == 0){
        alert(`You loos! Guess number ${guessNumber}`)
    }
    if(guessNumber == userAnswer){
        alert('you win!');
        break;
    }else if(userAnswer){
        alert('to big number');
        maxTryCount--;
    }else{
        alert('to small number');
        maxTryCount--;
    }
    if(maxTryCount != 0){
        userAnswer = prompt(`try again, enter new number.\nyou have ${maxTryCount}, try more`)
    }
}




