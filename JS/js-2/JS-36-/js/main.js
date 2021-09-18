const names = ['Ivan', 'Anna', 'Mariya', 'Nicolay', 'Petr', 'Olga'];

const ul = document.querySelector('#list'),
      addBtn = document.querySelector('#addBtn');

let i = 0;   

//addBtn.önclick = changeBg;
/* addBtn.onclick = ()=>{
    const index = getRnd(names.length);
    //ul.innerHTML += `<li>${names[index]}</li>`;
    //ul.append(li);
    //ul.prepend(li);
     //ul.append(createLi(names[index]));
    //ul.insertAdjacentHTML('beforebegin', `<li>${names[index]}</li>`)

    //let li = createLi(names[index]);
    if(i===names.length) return;
    let li = createLi(names[i++]);
        
    //ul.insertAdjacentElement('beforeend', li)
    //ul.insertAdjacentHTML('afterbegin', `<li>${names[index]}</li>`)
    //ul.insertAdjacentHTML('afterend', `<li>${names[index]}</li>`)
    ul.append(li)
}     */

const liRender = ()=>{
    let li = createLi(names[i++]);
    ul.append(li);
    if(i===names.length) addBtn.removeEventListener('click', liRender)
}

addBtn.addEventListener('click', liRender);
addBtn.addEventListener('click', changeBg, once);

function createLi(name){
    const li = document.createElement('li');
    li.innerHTML = name;
    li.style.backgroundColor = getRandomColor();
    li.classList.add('nameList');
    li.onclick = changeBg;
    return li;
}

function getRnd(max){
    return parseInt(Math.random() * max);
}     

function getRandomColor(){
    return `rgb(${getRnd(256)}, ${getRnd(256)}, ${getRnd(256)})`
}

const box = document.querySelector('.box');

/* box.onclick = (e)=>{
    console.log(e.target)
    box.style.backgroundColor = getRandomColor();
} */

box.onclick = changeBg;

/* box.onclick = ()=>{
    console.log('click')
} */

box.addEventListener('click', changeBg);
box.addEventListener('click', ()=>{
    console.log('click')
})

function changeBg(e){
    e.target.style.backgroundColor = getRandomColor();
}

//box.removeEventListener('click', changeBg)



 