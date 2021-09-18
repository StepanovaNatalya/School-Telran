const inputText = document.querySelector('#myInput'),
      addBtn = document.querySelector('#addBtn'),
      list = document.querySelector('#todo-list');
    
 inputText.focus();

 addBtn.onclick = () =>{
     const li = document.createElement('li');
     const check = document.createElement('input');
     //checkBox.type = 'checkbox' -1 variant
     check.setAttribute('type', 'checkbox');

     li.innerText = inputText.value;
     li.prepend(check);

     check.onchange = () =>{
         li.style.textDecoration = check.checked ? 'line-through' : 'none';
     }
     list.append(li);
     inputText.value = '';
     inputText.focus();
 }

 /////////////////////////////////     
      /* container.append(taskUl);
      li.appendChild(inp)

let li;      

btn.onclick = () =>{
    let title = inputTask.value.trim();
    if(!title){
        alert('Enter title!');
        cleanInput(inputTask)
    }else{
        tasks.push(title);
        taskUl.innerHTML = '';
        renderUl();
        cleanInput(inputTask);
    }
}

function renderUl(){
    tasks.map((task, index) => createTaskLi(task,index)).forEach(li => taskUl.append(li));
}

function createTaskLi(title, index){
    li = document.createElement('li');
    li.innerHTML = `${checkInput} ${index +1} ${title}`;
    li.onclick = () =>{
    li.classList.toggle('line-through')
    }
    return li
}

function checkInput(){
    //const inp = document.createElement('input');
    inp.type = 'checked';
    //inp.id = 'check';
    li.appendChild(inp)
    
}

function cleanInput(element){
    element.value = '';
    element.focus();
}
 */

