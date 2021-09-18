const btnHome = document.querySelector('#homeBtn'),
    cartBtn = document.querySelector('#cartBtn'),
    root = document.querySelector('#root'),
    arr = [{
        id: 0,
        picture: './images/salad-pngrepo-com(1).png',
        title: 'Ceaser salad',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem.',
        price: 6,
        countity: 4,
    },
    {
        id: 1,
        picture: './images/soup-pngrepo-com.png',
        title: 'Tomato soup',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem.',
        price: 5,
        countity: 1,
    },
    {
        id: 2,
        picture: './images/steak-pngrepo-com.png',
        title: 'Steak',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem.',
        price: 12,
        countity: 1,
    },
    {
        id: 3,
        picture: './images/orange-juice-juice-pngrepo-com.png',
        title: 'Orange juice',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem.',
        price: 3,
        countity: 1,
    },
    ],
    basket = [];

btnHome.onclick = (event) => {
    btnHome.classList.add('active');
    cartBtn.classList.remove('active');
    event.preventDefault();
    root.innerHTML = '';
    root.style.display = 'grid'
    for (let i = 0; i < arr.length; i++) {
        const div = document.createElement('div');
        div.id = `idCard_${arr[i].id}`;
        div.className = 'card';
        div.innerHTML = `<img src=${arr[i].picture} alt="">
        <h2>${arr[i].title}</h2>
        <p>${arr[i].description}</p>
        <h3>Price: &#8364 ${arr[i].price}</h3>
        <h4>Countity: ${arr[i].countity}</h4>
        <button data-id = ${arr[i].id}>ADD TO CART</button>`
        root.append(div);
    }
}


cartBtn.onclick = (event) => {
    cartBtn.classList.add('active');
    btnHome.classList.remove('active')
    event.preventDefault();
    root.innerHTML = '';
    const table = document.createElement('table');
    table.classList.add('table')
    root.style.display = 'block'
    table.innerHTML = `<thead>
        <th>Title</th>
        <th>Price</th>
        <th>Count</th>
        <th>Total</th>
    </thead>`;
    for (let i = 0; i < arr.length; i++) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${arr[i].title}</td>
          <td>&#8364 ${arr[i].price}</td>
          <td>${arr[i].countity}</td>
          <td>&#8364 ${arr[i].price * arr[i].countity}</td>`
        table.append(tr)
    }
    root.append(table);

    const total = document.createElement('div');
    total.classList.add('total')
    total.innerHTML = `<h3>Total: ${arr.reduce((total, item) => total + item.countity * item.price, 0)}</h3>`
    root.append(total)
}

const buttons = document.querySelectorAll('[data-id]');
buttons.forEach(btn => {
    btn.onclick = goodAddHandler;
})

function goodAddHandler(event) {
    const id = +event.target.dataset.id;
    const cards = arr.find(el => el.id == id);
    const goodCards = cart.find(el => el.id == id)
    console.log(id)
    //root.innerHTML = '';
    if (goodCards) {
        goodCards.countity++
    } else {
        cart.push({
            id,
            title: cards.title,
            price: cards.price,
            countity: 1,
        })
        renderCart();
    }
}
    function renderCart() {
        root.innerHTML +=
            cart.forEach((item, index) => {
                const div = document.createElement('div');
                div.id = `idCard_${index}`;
                div.className = 'card';
                div.innerHTML = `<img src=${item[i].picture} alt="">
        <h2>${item[i].title}</h2>
        <p>${item[i].description}</p>
        <h3>Price: &#8364 ${item[i].price}</h3>`
                root.append(div);
            })
    }
