const filmName = document.querySelector('#filmName'),
      btn = document.querySelector('.btn'),
      filmList = document.querySelector('.container'),
      filmUl = document.createElement('ul')
      films = [];   

      document.querySelector('.container').append(filmUl);

 
        
//variant 1    
//let counter = 1;
/* btn.onclick = () =>{
    let title = filmName.value.trim();
    title = title.trim();
    if(!title){
        alert('Enter title!');
        filmName.value = '';
    }else{
    const li = document.createElement('li');
    li.innerHTML = `${counter++}. ${title}`;
    filmUl.append(li);
    filmName.value = '';
    filmName.focus();
   }
}   */

//variant 2
//let counter = 1;
/* btn.onclick = () =>{
    let title = filmName.value;
    if(!title){
        alert('Enter title!');
        cleInput(filmName);
    }else{
      const li = createLi(counter, title);
      counter++;
      cleInput(filmName)
   }
}  

function createLi(number, title){
    const li = document.createElement('li');
    li.innerHTML = `${number++}. ${title}`;
    li.onclick = () =>{
        li.classList.toggle('line-through')
    }
    return li
}

function cleanInput(element){
    element.value = '';
    element.focus();
} */

//variant-3
/* btn.onclick = ()=>{
    let title = filmName.value.trim();
    if(!title){
        alert('Enter title!');
        cleanInput(filmName)
    }else{
        films.push(title);
        filmUl.innerHTML = '';
        renderUl();
        cleanInput(filmName);
    }
}

function renderUl(){
    for(let i = 0; i < films.length; i++){
        filmUl.innerHTML += `<li>${i + 1}. ${films[i]}</li>` 
    }
}

function cleanInput(element){
    element.value = '';
    element.focus();
} */

//variant-4
btn.onclick = ()=>{
    let title = filmName.value.trim();
    if(!title){
        alert('Enter title!');
        cleanInput(filmName)
    }else{
        films.push(title);
        filmUl.innerHTML = '';
        renderUl();
        cleanInput(filmName);
    }
}

/* function renderUl(){
   const arr = films.map((film, index) => createFilmLi(film, index));
   arr.forEach(li => filmUl.append(li));
} */
function renderUl(){
    films.map((film, index) => createFilmLi(film, index)).forEach(li => filmUl.append(li));
 }

function createFilmLi(title, index){
    const li = document.createElement('li');
    li.innerHTML = `${index +1}. ${title}`;
    li.onclick = () =>{
        li.classList.toggle('line-through')
        }
        return li
}

function cleanInput(element){
    element.value = '';
    element.focus();
}
