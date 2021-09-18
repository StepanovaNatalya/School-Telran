//Task 1
const container = document.querySelector('.container');


function createDiv() {
    for (let i = 0; i < 10; i++) {
        let div = document.createElement('div');
        div.innerHTML = '';
        div.classList.add('box')
        container.append(div);
        /* div.onclick = () => {
            div.remove()

        } */
    }
}
createDiv()
const boxes = document.getElementsByClassName('box')
function removeElement(event){
    if(event.target.classList.contains('box')){
        event.target.remove()
        if(boxes.length === 1){
            container.removeEventlistener('click', removeElement)
        }
    }
}

//-----------------------------------
//Task 2
const wrapper = document.createElement('div');

container.after(wrapper);

function createBox() {
    for (let i = 0; i < 5; i++) {
        let box = document.createElement('div');
        box.innerHTML = '';
        box.classList.add('box');
        box.style.backgroundColor = 'green';
        wrapper.append(box)
        box.onclick = () => {
            box.classList.toggle('boxChange')
        }
    }
}

createBox();


