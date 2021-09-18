//Task 01
/* 
'jdsfdj ssds dndnnd dncjd jdnsdjjd' -> 4 (вернуть длину самого короткого слова в строке)
*/
//-----variant 1--------
let str = 'jdsfdj ssds dndnnd dncjd jdnsdjjd';

function getShortWord(str) {
    let shortWord = [];
    shortWord = str.split(' ').map(el => el.length).sort((a, b) => a - b);
    return shortWord[0];
}

console.log(getShortWord3(str))

//-------variant 2--------------
function getShortWord3(str) {
    return str.split(' ').sort((a, b) => b.length - a.length).pop().length;
}

console.log(getShortWord3(str))

//-------variant 3----------
function findShortTest(str){
    const arr = str.split(' ');
    let shortTest = arr[0].length
    for(let i = 1; i < arr.length; i++){
        if(arr[i].length < shortTest){
            shortTest = arr[i].length
        }
    }return shortTest;
}

console.log(findShortTest(str));

//--------variant 3-----------
function findShortTest2(str){
    return str.split(' ').reduce((minWord, currentWord) => minWord.length < currentWord.length ? minWord : currentWord).length;
}

console.log(findShortTest2(str));
//------------------------------------------------------------
//Task 02
/* 
function isIsgram('abcd') -> true;
function isIsgram('abbcd') -> false;
function isIograma('abdcA') -> false;
*/
let strIsIgram = 'abcd';

function isIgram(strIsIgram) {
    let array = [];
    array = strIsIgram.toLowerCase().split('');
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]){
                return false
            }
        }
    } return true
}

console.log(isIgram(strIsIgram))

//------variant 2-----------
function isIsogram(strIsIgram){
    let i = 0;
    const strings = strIsIgram.toLowerCase().split('').sort();
    while(strings[i] != strings[i+1] && i < strings.length - 1) i++;
    return i == strings.length -1 ? true : false
}

console.log(isIsogram(strIsIgram));

//-------variant 3-----------
function isIsogram1(strIsIgram){
    let count = {} // {a: 1; b: 1, c: 1, d: 1} //{a: 1, b: 2, c: 1, d: 1}
    const strings = strIsIgram.toLowerCase().split('').sort();
    for (s of strings){
        count[s] ? count[s]++ : count[s] = 1;
        if(count[s] > 1) return false
    }
    return true
}

console.log(isIsogram1(strIsIgram));

//---------variant 4----------
const isIsogram3 = (string) => string.toLowerCase().split('').every((s,index) => string.indexOf(s) === index);

console.log(isIsogram3(strIsIgram));

