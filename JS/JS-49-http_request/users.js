const BASE_URL = 'https://jsonplaceholder.typicode.com';
getUserById(2);
async function getUserById(id) {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    const data = await response.json();
    renderUser(data);
    getTodoByUserId(id);
}

function renderUser(user) {
    const div = document.createElement('div');
    div.innerHTML = `
    <h3>Name: ${user.name}</h3>
    <h5>Nickname: ${user.username}</h5>
    <p>Email: ${user.email}</p>
    `
    document.querySelector('#user').append(div);
}
async function getTodoByUserId(id) {
    const response = await fetch(`${BASE_URL}/todos?userId=${id}`);
    const data = await response.json();
    createTodoList(data);
}
function renderTodo(todo) {
    return `
    <li>${todo.title}</li>
    `
}
function createTodoList(arr) {
    arr.forEach(el => {
        document.querySelector('#todo ul').innerHTML+=renderTodo(el)
    });
}