const BASE_URL = 'https://jsonplaceholder.typicode.com'

// XML Http Request
/* let xhr = new XMLHttpRequest();

xhr.open('GET', `${BASE_URL}/posts`);
xhr.setRequestHeader('Content-Type','application/json');
xhr.send();
xhr.onload = ()=>{
    if(xhr.status >=200 && xhr.status<300){
        console.log(JSON.parse(xhr.response))
    }else{
        console.log(`Error in code, status: ${xhr.status}`)
    }
    
} */



///////////////////// fetch ///////////////////

/* fetch(`${BASE_URL}/posts`)
    .then(responce =>{
        if(responce.ok){
            return responce.json()
        }
        throw new Error(responce.status)
    }).then(data => console.log(data))

    console.log('end of code'); */

    function renderTodo(todo){
        document.querySelector('#todo').innerHTML += `<li>${todo.title}</li>`
    }

    /* fetch(`${BASE_URL}/todos?userId=3`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {renderTodo(element)})
    }).catch(err => console.log(err.message)) */

////////////////////////////////

async function getData(){
    const responce = await fetch(`${BASE_URL}/todos?userId=3`);
    const data = await responce.json();
    // console.log(data)
    // data.forEach(element => renderTodo(element))
    return data;
}

getData().then(res => {
    res.forEach(el => renderTodo(el))})

