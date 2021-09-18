//setTimeout(()=>{console.log('hello')}, 2000);  // 2s
//setTimeout(()=>{console.log('hello')}, 500);  // 0,556s

setTimeout(display, 1000, 'hello from timeOut');  //3 очередь

function display(text) {
    console.log(text)
}

display('hello from normal stream');  //1 очередь

console.log('end of code')            //2 очередь

//---------------

const idTimeOut = setTimeout(display, 1000, 'hello from timeOut')

let count = 10;

const id = (function () {
    console.log(count--);
    if (count === 0) {
        console.log('stop')
        clearInterval(id);
    }
}, 1000)

/* setTimeout(function(){    //отмена по времени
    console.log('time out');
    clearInterval(id)
}, 3000); */

console.log('end of code')

///////////////////////////////////////////

const btn = document.querySelector('.btn');

btn.onclick = myAnimation;

function myAnimation() {
    const box = document.querySelector('.box');
    let position = 0;
    const id = setInterval(moveBoxBottom, 10);
         let idTop;

    function moveBoxBottom() {
        if(position === 300){
            clearInterval(id);
            idTop = setInterval(moveBoxTop, 10);    
        }
        position++;
        box.style.top = position + 'px';
        box.style.left = position + 'px';
       /*  console.log(box.style.bottom) */
    }
    function moveBoxTop(){
        if(position === 0){
            clearInterval(idTop);
            id = setInterval(moveBoxBottom, 10);    
        }
        position--;
        box.style.top = position + 'px';
        box.style.left = position + 'px';
        }
}