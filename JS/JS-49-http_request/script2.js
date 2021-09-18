const BASE_URL = 'https://jsonplaceholder.typicode.com';

function getPostById(id) {
    fetch(`${BASE_URL}/posts/${id}`)
        .then(res => res.json())
        .then(data => {
            renderPost(data);
            getCommentById(id);
        });
}

function renderPost(post) {
    const div = document.createElement('div');
    div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `
    document.querySelector('#post').append(div);
}

getPostById(5)

function getCommentById(id) {
    fetch(`${BASE_URL}/comments?postid=${id}`)
        .then(res => res.json())
        .then(data => renderComments(data))

}

function renderComments(comments) {
    comments.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `
    <h5>${element.email}, left comment:</h5>
    <p>${element.body}</p>
    `
        document.querySelector('#comment').append(div)
    })
}