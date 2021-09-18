//Task 01
/* 
'jdsfdj ssds dndnnd dncjd jdnsdjjd' -> 4 (вернуть длину самого короткого слова в строке)
*/
let str = 'jdsfdj ssds dndnnd dncjd jdnsdjjd';

function getShortWord(str) {
    let shortWord = [];
    shortWord = str.split(' ').map(el => el.length).sort((a, b) => a - b);
    return shortWord[0];
}


console.log(getShortWord(str))

//------------------------------------------------------------
//Task 02
/* 
function isIsgram('abcd') -> true;
function isIsgram('abbcd') -> false;
function isIograma('abdcA') -> false;
*/
let strIsIgram = 'abccA';

function isIgram(strIsIgram) {
    let array = [];
    array = strIsIgram.split('');
    for (i = 0; i < array.length; i++) {

        for (j = i + 1; j < array.length; j++) {
            if (array[i] == array[j] || array[i] === array[j].toUpperCase()) {
                return false
            }

        }

    } return true
}

console.log(isIgram(strIsIgram))

