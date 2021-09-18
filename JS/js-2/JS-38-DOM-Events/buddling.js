const box = document.querySelector('.box'),
      item = box.querySelector('.item'),
      row = document.querySelector('.row'),
      items = document.querySelector('.box-item');

/* const click = (event) =>{
    console.log(event.target);
    console.log('click')
}  */

const click = (event) =>{
    console.log(event.target);
    console.log('click')
} 

item.addEventListener('click', click);
box.addEventListener('click', click);

//items.array.forEach(element => element.onclick = click)
row.onclick = (event)=>{
    if(event.target.classlist.contains('box-item')){
      console.log(event.target);                  //rabotaet tolko na detyax
      console.log('click')
    }
}
