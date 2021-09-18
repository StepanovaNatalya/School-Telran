//Task 1

const btn15 = document.querySelector('.btn-15'),
      btn25 = document.querySelector('.btn-25'),
      btn35 = document.querySelector('.btn-35'),
          btnRed = document.querySelector('.btn-red'),
          btnGreen = document.querySelector('.btn-green'),
          btnBlue = document.querySelector('.btn-blue'),
      text = document.querySelector('.text-task1');

btn15.onclick = () => changeSize(text, 15);
btn25.onclick = () => changeSize(text, 25);
btn35.onclick = () => changeSize(text, 35);

btnRed.onclick = () => changeColor(text, 'red');
btnGreen.onclick = () => changeColor(text, 'green');
btnBlue.onclick = () => changeColor(text, 'blue');

function changeSize (element, size){
    element.style.fontSize = `${size}px`;
}

function changeColor (element, color){
    element.style.color = `${color}`;
}

//----------------------------------------
//Task 2

const btnFs = document.querySelector('.fs-set'),
      btnColor = document.querySelector('.color-set');

btnFs.onclick = () =>{
    const inputFs = document.querySelector('#fs-input').value;
    document.querySelector('.text-task2').style.fontSize = `${inputFs}px`;
}   

btnColor.onclick = () =>{
    const inputColor = document.querySelector('#color-input').value;
    document.querySelector('.text-task2').style.color = `${inputColor}`;
}

//----variant 2----------

/* function changeText(){
    secondText.style = `font-size: ${inputSize.value}px; color: ${inputColor.value}`;
    inputColor = '';
}

btnSize.onclick = () => {
    changeText;
    inputSize.value = '';
}

btnColor.onclick = () => {
    changeText;
    inputSize.value = '';
} */

//--------------------------------------------
//Task 3
const square = document.querySelector('.square');      

/* square.onclick = () =>{
    square.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    counter++;
    square.querySelector('.text-task3').textContent = counter; */

    //--variant 2---------
    /* `rgb(${randomNum},${randomNum},${randomNum})`  
     function randomNum(){
    return parseInt(Math.random()*256)
}
    */ 
//}

function clickHandler(){
    let counter = 0;
    return () => {
        square.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    counter++;
    square.querySelector('.text-task3').textContent = counter;
    }
}

square.onclick = clickHandler();

