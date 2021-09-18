class User{
    constructor(name, city){
        this.name = name;
        this.city = city;
        this.id = User.id++
    }

    static id = 0;

    renderUser(){
        return `<h3 data-id="$${}>${this.name}, ${this.city}</h3>`
}

}

const users = [
    new User('Vasya Pupkin','Berlin'),
    new User('Maks Kostenko','Mainz'),
    new User('Ivan Ivanov','Kiev')
]

const userList = document.querySelector('.user-list');

const renderUsersList = (array) =>{
    array.forEach(item => {
        userList.innerHTML += item.renderUser()
    })
}

renderUsersList(users);

class Message {
    constructor(userId, title, text, data){
        this.userId = userId;
        this.title = title;
        this.text = text;
        this.data = data;
        this.comments = [];
        this.id = Message.id++
    }

    static id = 0;

    renderMessage(){
        return `
        <div data-messageId="${this.id}>
            <h4>${this.title}</h4>
            <p>Published: ${this.data}</p>
        </div>
        `
    }

    renderFullInfo(userName){
        return `
        <div>
            <h3>${this.title}</h3>
            <p>${this.text}</p>
            <h4>Published: ${this.data}</h4>
            <hr>
            ${(this.comments.length === 0)? `<p>No comment'</p>`: this.comments.map(item => item.renderComment()).join('')}
    </div>
        `
    }
}

class Comment{
    constructor(userId, messageId, text, data){
        this.id = Comment.id++
        this.userId = userId;
        this.messageId = messageId;
        this.text = text;
        this.data = data;
    }

    static id = 0;

    renderComment(userName){
        return `
             <div>
                   <h5>${this.text}</h5>
                   <p>${this.data}, comment by ${userName}</p>
             </div>
        `
    }
}

const messages = [new Message(0,'Hello','World',new Date(.getFullYear()),new Message(0,'Hello','World',new Date(.getFullYear()),new Message(0,'Hello','World',new Date(.getFullYear())]