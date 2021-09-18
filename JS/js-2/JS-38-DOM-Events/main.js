const sendBtn = document.querySelector('[type = submit]');
const myForm = document.querySelector('#myForm');

console.log(sendBtn);
console.log(myForm);
console.log(myForm.elements)  //collection
console.log(myForm.lastName); //dobratsya do Inputa
console.log(myForm.lastName.value); //dobratsya do value
console.log(myForm.elements[1].atributes); //collection atributov dannoi formi

console.log(document.forms); // formiruetsya collection vsex form na stranice
console.log(document.forms[0]); //dobratsya do pervoi formi
console.log(document.forms.subscribe); // dobratsya do form po name
console.log()

//Task по клику на кнопку send сщздать объект user и добавлять в массив users

const users = [];
document.querySelector('#firstName').focus()

//-------version-1---------------------
/* myForm.onsubmit = (event)=>{
    event.preventDefault();
    const firstName = event.target.firstName,
          lastName = event.target.lastName,
          email = event.target.email;
    let user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
     }
     users.push(user);
     firstName.value = '';
     lastName.value = '';
     email.value = '';
     console.log(users)
} */

//--------version-2---------------------

/* myForm.onsubmit = (event)=>{
    event.preventDefault();
    const firstName = event.target.firstName,
          lastName = event.target.lastName,
          email = event.target.email;
    
     users.push(createUser(firstName, lastName, email));
     clean(firstName);
     clean(lastName);
     clean(email);
     firstName.focus();
     console.log(users)
}     

function createUser(firstName, lastName, email){
    return {
        firstName,
        lastName,
        email,
    }
}

function clean(element){
    element.value = ''
} */

//--------version-2---------------------

myForm.onsubmit = (event)=>{
    event.preventDefault();
    const firstName = event.target.firstName,
          lastName = event.target.lastName,
          email = event.target.email;
    
     users.push(createUser(firstName, lastName, email));
     const inputs = myForm.querySelectorAll('input:not([type = submit])');
     clean(inputs);
     firstName.focus();
     console.log(users)
}     

function createUser(firstName, lastName, email){
    return {
        firstName,
        lastName,
        email,
    }
}

function clean(elements){
    for(element of elements){
        element.value = ''
    }
}