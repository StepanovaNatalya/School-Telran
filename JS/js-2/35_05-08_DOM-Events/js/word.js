const box = document.querySelector('.box'),
      message = document.querySelector('#message'),
      input = document.querySelector('#userAnswer'),
      submitbtn = document.querySelector('#button'),
      array = ['orange', 'apple', 'strawberry', 'lemon'];


btn.onclick = () =>{
    guesWord = input.nodeValue.toLocaleLowerCase();
    if(!guesWord) alert('Enter a word, pleace!')
    else {
        answerArr = makeSymbolArr(guesWord);
        changeMessage(`Your word is ${guesWord.length} letters`);
        hide(submitBtn);
        show(checkBtn);
        wordState.innerHTML = `${answer}`
    }

    message.textContent = 'enter a letter'
    const xWord = document.createElement('p');
    xWord.innerHTML = changeWord();
    box.prepend(xWord);
}     

function changeWord(str){
    let arr = [];
    arr.length = str.length;
    for(let i = 0; i < arr.length; i++){
        arr[i] = '_';
    }return arr;
}

function getRnd(max){
    return parseInt(Math.random() * max);
}


