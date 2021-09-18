const wrapper = document.querySelector('.wrapper'),
    content = document.querySelector('.content'),
    
    buttons = document.querySelectorAll('button');
   
/* buttons.forEach(btn =>.onclick = (event)=>{
    content.innerHTML = '';
    getItem(+event.target.value, event.target.innerHTML);
})

function getItem(n, text){
    for(let i = 1; i <= n)
} */

function createArr(x) {
    for (let i = 0; i < x; i++) {
          arr.push('Jazz-item')
    }return arr
}

function createDiv(){
    arr.forEach((element) => {
        const div = document.createElement('div');
        div.className = 'card'
        div.innerText = element;
        content.append(div);
    })
}

const divs = wrapper.querySelectorAll('card');

buttons.forEach(button =>
    button.onclick = (event) =>{
        arr = []
        content.innerHTML = '';
        createArr(9);
        createDiv();
        let id = event.target.id.split('_')[0];
        divs.classList.add(`j-card ${id}`)
    });