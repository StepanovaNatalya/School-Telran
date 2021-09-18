/* Task 01
   написать метод, который на вход получает массив целых чисел, которые могут повторяться, а возвращает новый массив без повторяющихся чисел
      [2,5,7,9,7,2] -> [2,5,7,9]
      [2,0,0,1,1,2] -> [2,0,1]
   */

// variant 1
function uniqNumbers(array){
     const newArray = [];
     for(let number of array){
         if(!newArray.includes(number)){
             newArray.push(number);
         }
     } return newArray;
}

console.log(uniqNumbers([1,2,4,2,1,5,5]));

// variant 2
      const array = [2,5,7,9,7,2];

          function numbersNoRepeat (array){
              let newArray = {};
              return array.filter(function(number){
                  return number in newArray ? 0 : newArray[number] = 1;
              });
              
              
          };

      console.log(numbersNoRepeat(array));

    // variant 3
    const uniqArray = array.filter((elm, i) => array.indexOf(elm)===i);
    console.log(uniqArray); 

//--------------------------------------------------
//Task 2 
    // variant 1

    function replaceValue(arr){
        const max = arr[0] > arr[arr.length -1] ? arr[0] : arr[arr.length -1];
        const newArray = [...arr]     //arr.slice();
        return newArray.fill(max);
    }

    console.log(replaceValue(array))

    // variant 2

      let array2 = [1,5,6,7,2];
      let newArray2 = [];

      function strangeArrChanger(arr) {
        const max = arr[0] > arr[arr.length-1] ? arr[0] : arr[arr.length-1]
        return arr.map(item => item = max)
    }
    
    console.log(strangeArrChanger(array2));

//---------------------------------------------------------

//Task 3
//Метод, который получает строку и символю и возвращает количество повторений символov

// variant 1
const countSymbol = function (str, char){
    let counter = 0;
    for (let i = 0; i < str.length; i++)
    if (str[i] === char)
    counter++
    return counter;
}

// variant 2 
const countSymbolReduce = function (str, char) {
    let counter = 0;
    str.split('').forEach(item => {
        if (item === char) counter++
    })
    return counter;
}


console.log(countSymbol(str 'qfqfqfqad', char'q'))

console.log('Reduce ' + countSymbolReduce('qfqfqfqad', 'q'))





      
     

      