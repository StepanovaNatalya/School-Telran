const btnStart = document.querySelector('.blau'),
    btnStop = document.querySelector('.red'),
    input = document.querySelector('#input'),
    textStop = document.querySelector('h2');

//-----My variant-------------    

/* btnStart.onclick = () => {
    textStop.innerText = input.value;
    const id = setInterval(function () {
        input.value--;
        btnStop.onclick = () => {
            textStop.innerText = 'Timer is stopped';
            clearInterval(id);
        }
    }, 1000) 
} */

////// variant 2 ///////////

let count,
    id;

input.focus();

btnStart.onclick = startTimer;
btnStop.onclick = stopTimer;

function startTimer(){
    count = parseInt(input.value);
    if(isNaN(count)) return;
    btnStart.disabled = 'true'; //startBtn, setAttribute
    btnStop.disabled = 'false';
    input.disabled = 'true';
    textStop.innerHTML = count;
    id = setInterval(function(){
        count--;
        if(count > 0){
            textStop.innerHTML = count;
        }else{
            stopTimer();
        }
    },1000)
}

function stopTimer(){
    clearInterval(id)
    btnStart.disabled = false;
    btnStop.disabled = true;
    if(count > 0){
        textStop.innerHTML = 'Timer is stopped';
        input.value = count;
    }else{
        textStop.innerHTML = 'Time is over';
        input.value = '';
        input.disabled = false;
        input.focus();
    }
}
