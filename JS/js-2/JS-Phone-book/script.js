const contactsBtn = document.querySelector('#contactsBtn'),
    newContacts = document.querySelector('#newContacts'),
    root = document.querySelector('#root'),
    imgSearch = document.querySelector('.imgSearch'),
    inputSearch = document.querySelector('#inputSearch');
contacts = [
    {
        id: 0,
        name: 'John Doe',
        tel: '1239876523',
        email: 'john@gmail.com',
        city: 'Tel Aviv',
        description: 'dentist'
    },
    {
        id: 1,
        name: 'Jack Sparrow',
        tel: '4485654466',
        email: 'sparrow@gmail.com',
        city: 'New York',
        description: 'lawyer'
    },
    {
        id: 2,
        name: 'Tony Stark',
        tel: '995323654',
        email: 'stark@gmail.com',
        city: 'Moscow',
        description: 'teacher'
    },
]

contactsBtn.onclick = (event) => {
    contactsBtn.classList.add('active');
    newContacts.classList.remove('active');
    event.preventDefault();
    root.innerHTML = '';

    const ul = document.createElement('ul');
    ul.classList.add('box-left')
    root.append(ul)
    ul.innerHTML = '';
    
    for (let i = 0; i < contacts.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `
        <div>
             <h2>${contacts[i].name}</h2>
                 <p>${contacts[i].tel}</p>
         </div>
         <div>
             <i class="fas fa-trash" data-id=${i}></i>
         </div>`
         li.id = `contact_${i}`
         ul.append(li)
         li.onclick = fullInfo;
     }
     div = document.createElement('div');
     div.classList.add('contact-right');

     divRight = document.createElement('div');
    divRight.classList.add('box-right');
    root.append(divRight);
    pRight = document.createElement('p');
    pRight.innerText = 'No selected contact';
    divRight.append(pRight);
}

function fullInfo(event){
    const id = +event.currentTarget.id.split('_')[1];
    //const contact = contacts.find(c => c.id === id);
 
    div.innerHTML = `
    <h1>${contacts[id].name}</h1>
    <p><img src="./images/technology.png" alt="phone">  ${contacts[id].tel}</p>
    <p><img src="./images/multimedia.png" alt="email">  ${contacts[id].email}</p>
    <p><img src="./images/buildings.png" alt="city">  ${contacts[id].city}</p>
    <p><img src="./images/buildings.png" alt="city">  ${contacts[id].description}</p>`
    root.append(div);
    removeContact();
}

/* function removeContact(event){
    if (event.target.classList.contains('fas')){
    const index = +event.parentNode.dataset.id;           // basket?
    contacts.splice(index, 1)
    }
} */

newContacts.onclick = (event)=>{
     
     form = document.createElement('form');
     form.id = 'contactsForm';
     root.append(form);
     event.preventDefault();

     inputName = document.createElement('input');
     inputName.type = 'text'
     inputName.id = 'inputName';
     inputName.placeholder = 'type name';
     //focus(inputName);

     inputTel = document.createElement('input');
     inputTel.type = 'text';
     inputTel.id = 'inputTel';
     inputTel.placeholder = 'type phone';

     inputEmail = document.createElement('input');
     inputTel.type = 'email';
     inputEmail.id = 'inputEmail';
     inputTel.placeholder = 'type email';

     inputAdress = document.createElement('input');
     inputAdress.type = 'text';
     inputAdress.id = 'inputAdress';
     inputAdress.placeholder = 'type adress';

     inputDescription = document.createElement('input');
     inputDescription.type = 'text';
     inputDescription.id = 'inputDescription';
     inputDescription.placeholder = 'type description';

     submit = document.createElement('button');
     submit.name = 'submit';
     submit.id = 'submit';
     submit.innerHTML = 'ADD';

     form.append(inputName);
     form.append(inputTel);
     form.append(inputEmail);
     form.append(inputAdress);
     form.append(inputDescription);
     form.append(submit);

     submit.onclick = addContacts;
}

function addContacts(event){
     event.preventDefault();

     const cont ={
         id: contacts.length,
         name: inputName.value,
         tel: inputTel.value,
         email: inputEmail.value,
         city: inputAdress.value,
         description: inputDescription.value,
     }
     contacts.push(cont);          //clean?
}

const arr = [];

imgSearch.onclick =()=>{
    for(let i = 0; i < contacts.length; i++){
       const word = contacts[i].name.split('');
       for(let j = 0; j < word.length; j++){
           const searchValue = inputSearch.value.split('');
             for(let s = 0; s < searchValue.length; s++){
              if(j == s){
                arr.push(contacts[i]);

                root.innerHTML = '';

                const ul = document.createElement('ul');
                ul.classList.add('box-left')
                root.append(ul)
                ul.innerHTML = '';
                
                for (let i = 0; i < arr.length; i++) {
                    const li = document.createElement('li');
                    li.innerHTML = `
                    <div>
                         <h2>${arr[i].name}</h2>
                             <p>${arr[i].tel}</p>
                     </div>
                     <div>
                         <i class="fas fa-trash" data-id=${i}></i>
                     </div>`
                     li.id = `contact_${i}`
                     ul.append(li)
                     li.onclick = fullInfo;
                 }}
              }
       }
    }
}

