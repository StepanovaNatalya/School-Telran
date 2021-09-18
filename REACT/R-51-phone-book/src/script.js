import Contact from './Contact';
import renderAddContact from './contactForm'
import renderContacts from './contactList'
import renderHome from './home'
import renderLogin from './login'
import navigationView from './navigation'
import Store from './store'
import formValidation from './validation'
import contactView from './viewContact'

function main(){

const state = {
    currentUser: null,
    location: null,
    contacts: []
}

setUp();

function setUp(){
    const currentUser = Store.getCurrentUser();
    if(!currentUser){
        navigation('home');
        return
    }
    state.currentUser = currentUser;
    state.contacts = Store.getAllContacts(currentUser);
    navigation('contacts')
}

function navigation(path) {
    if(path !== state.location){
        if(path === 'logout'){
            Store.logout();
            state.contacts = [];
            state.location = 'home'
        }else{
            state.location = path
        }
    }
}

function app(location, contacts){
    const root = document.querySelector('#root')
    root.innerHTML = '';
    root.append(
        navigationView(state.currentUser, location,
        navClickHandler)
    );
    root.append(document.createElement('hr'));
    const content = contentRender(location, contacts);
    root.append(content)
}

function navClickHandler(event){
    event.preventDefault();
    if(event.target.tagName === 'A'){
        navigation(currentPageLink.getAttribute('href'))
    }
}

function contentRender(location, contacts){
    const div = document.createElement('div');
    switch(location){
        case 'logout':
        case 'home': {
            div.className = 'home'
            div.innerHTML = renderHome();
            break
        }
        case 'login':{
            div.className = 'add-contact';
            div.innerHTML = renderLogin();
            div.querySelector('form').onsubmit = contactClickHandler;
            break
        }
        case 'contacts':{
            div.className = 'contacts'
            div.innerHTML = renderContacts(contacts);
            div.querySelector('.list').onclick =
            loginSbmitHandler;
            break
        }
        case 'add':{
            div.className = 'add-contact'
            div.innerHTML = renderAddContact;
            div.querySelector('form').onsubmit = formContactHandler;
            break
        }
        
    }
    return div;
}

// renderContacts(contacts);

function contactClickHandler(event, array) {
    let li = event.target;
    if (li.classList.contains('delete')) {
        array.splice(li.parentNode.dataset.index, 1)
        renderContacts(contacts)
    } else {
        if (li.tagName !== 'LI') {
            li = event.target.parentNode
        }
        if (currentContactRow) {
            currentContactRow.classList.remove('item-active')
        }
        showContact(li.dataset.index, array)
        currentContactRow = li
        currentContactRow.classList.add('item-active')
    }
}

/* function showContact(index) {
    const contact = contacts[+index];
    const contactView = root.querySelector('.contact-view');
    contactView.innerHTML = `
    <h2>${contact.name}</h2>
    <div class="contact-view-row">
      <img src="./img/technology.png" alt="" />
      <h3>${contact.phone}</h3>
     </div>
     <div class="contact-view-row">
      <img src="./img/multimedia.png" alt="" />
      <h3>${contact.email}</h3>
     </div>
     <div class="contact-view-row">
      <img src="./img/buildings.png" alt="" />
      <h3 ">${contact.address}</h3>
     </div>
     <p>${contact.desc}</p>
    `;
} */


function formSubmitHandler(event) {
    event.preventDefault();
    const form = event.target
    console.log(form.elements)
    if(!formValidation(form)){
    contacts.push({
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        address: form.address.value,
        desc: form.description.value
    });
    showSuccess(form.name.value)
    clearForm(form);
}
   

   /* currentPageLink.classList.remove('active')
    currentPageLink = document.querySelector('a[href= "contacts"]')
    currentPageLink.classList.add('active');
    navigation('contacts'); */

}




function clearForm(form) {
    for (element of form) {
        if (element.localName !== 'button') {
            element.value = ''
        }
    }
}
}

function showMessage(formIsComplit, text){
    let div = root.querySelector('.alert');
    if(!div){
        div = document.createElement('div');
        root.prepend(div)
    }
    div.className = `alert ${formIsComplit ? 'alert-success': 'alert-danger'}`;
    div.innerHTML = formIsComplit ? `Contact ${name} was added` : text
}

main();