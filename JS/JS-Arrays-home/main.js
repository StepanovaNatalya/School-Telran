// Task 1

let pifagorTable = [[],[], [], [], [], [], [], [], [], []];


for( let i = 0; i < 10; i++ ){
    for( let j = 0; j < 10; j++ ){
         pifagorTable[i][j] = (i+1)*(j+1);
        }
    }
    console.log(pifagorTable);
    console.log(pifagorTable[3][3])

/*let numbers = [1,2,3,4,5,6,7,8,9,10]  
let pifagorTable = [];

for (let k = 1; k <= 10; k++){
    let temp = [];
    for(let i = 0; i < numbers.length; i++){
        temp.push(numbers[i] * k)  //temp[i] = numbers[3][3]
    }
    pifagorTable.push(temp)
}*/

document.write('<h1 style = "text-align:center">Multiply table</h1>');
      document.write('<table border="1" cellspacing = "0" cellpadding = "10" align = "center">');
      for ( let i = 1; i<=10; i++){
           document.write('<tr>');
                 for(let j = 1; j <= 10; j++){
                     document.write(`<td> ${j}&times; ${i} = ${pifagorTable[i-1][i-1]}</td>`)
                 }
                 document.write('</tr')
  }
  document.write('</table>')

//console.log(pifagorTable);

//console.log(pifagorTable[9][9])



// Task 2
let num = 10; str ='';

while (num > 0 ){
    str += num + ' ';
    num--;
}

console.log(str);

num = 5;

for (let i = num; i > 0; i--){
    str += i + ' ';
}

console.log(str)

// Task 3
let numb = [prompt('enter number')]
let isPrime;
str = '';
for( let i = 2; i <= numb; i++){
    isPrime = true;
    for(let j = 2; j < i/2; j++){
        if(i%j == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime) str += i + ' ';
    }

    console.log(str)

