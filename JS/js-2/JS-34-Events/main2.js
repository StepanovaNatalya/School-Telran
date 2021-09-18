const users =[
    {name: 'Anna', age: 25, id:1},
    {name: 'John', age: 32, id:1},
    {name: 'Michael', age: 37, id:1},
    {name: 'Nina', age: 21, id:1},
    {name: 'Karl', age: 18, id:1},
],
    btnShow = document.querySelector('#showUser');

users.sort((user1, user2)=> user1.age - user2.age);
const wrapper = document.querySelector('.wrapper');
const ul = document.createElement('ul');

btnShow.onclick = ()=>{

for(let item of users){
    /* container.innerHTML += `<p style = 'border-bottom: 1px solid black'>${item.name}, ${item.age} years old</p>` */  //variant with style
    ul.innerHTML += `<li>${item.name}, ${item.age} years old</li>`;
}

wrapper.append(ul);

}