const btn = document.createElement('button'),
    wrapper = document.querySelector('.wrapper'),
    
    row = document.createElement('div');
row.classList.add('row');

wrapper.append(btn);

btn.innerText = 'click me';

btn.onclick = () => {
   const colors = ['aquamarine', 'blue', 'lime'];
   localStorage.setItem('colors', JSON.stringify(colors));
    row.innerHTML = '';
    renderBoxes(3);
}

function createBox() {
    const box = document.createElement('div');
    box.classList.add('box')
    return box
}

function renderBoxes(num) {
    // const colors = JSON.parse(localStorage.getItem('colors'))
    const index = JSON.parse(localStorage.getItem('boxId'))
    for (let i = 0; i < num; i++) {
        const box = createBox();
        box.setAttribute('data-index', i)
        box.onclick=onclickHandler;
        if(i === index){
            // box.style.backgroundColor = 'lime'
            box.click()
        }
        row.append(box);
    }
    wrapper.prepend(row)
}

function onclickHandler(event){
    const boxes = row.querySelectorAll('.box');
    boxes.forEach(el => el.style.backgroundColor = 'aquamarine')
     event.target.style.backgroundColor='lime';
     const index = event.target.dataset.index;
     localStorage.setItem('boxId', index)
}