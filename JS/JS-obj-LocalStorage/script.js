const users = [
    {   
        id: 0,
        name: 'Vasya',
        lastName: 'Ivanov',
        city: 'Berlin',
    },
    {
        id: 1,
        name: 'Petya',
        lastName: 'Petrov',
        city: 'Moscow',
    },
    {
        id: 2,
        name: 'Kolya',
        lastName: 'Nicolaev',
        city: 'Hamburg',
    },
    {
        id: 3,
        name: 'Vanya',
        lastName: 'Vasilev',
        city: 'Munchen',
    },
    {
        id: 4,
        name: 'Misha',
        lastName: 'Mihailov',
        city: 'Dresden',
    }
]

const wrapper = document.querySelector('.wrapper'),
      btn = document.querySelector('button');

      

btn.onclick = () =>{
    const blue = ['black', 'blue']
    localStorage.setItem('blue', JSON.stringify(blue))

    ul = document.createElement('ul'); 
    wrapper.append(ul);
      ul.innerHTML = '';
      renderLi();
      li.onclick = onclickHandler;
     
}      

function renderLi(){
    for(let i = 0; i < users.length; i++){
        li = document.createElement('li');
        li.setAttribute('data-id', i)
        li.innerHTML = `<h3>${users[i].name} ${users[i].lastName}</h3><h4>city: ${users[i].city}</h4>`
        ul.append(li)
    } 
}

function onclickHandler(event){
    const lis = document.querySelectorAll('li');
    lis.forEach(el => el.style.color = 'black');
    const index = event.target.dataset.id;
    
}