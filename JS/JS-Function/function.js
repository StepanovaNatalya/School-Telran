let num = 20;

function showMessage(text){
    //console.log('Hello!')
    console.log(text);
    num = 10;
}

showMessage('hello!');
showMessage('world!');
showMessage();

let message = 'Hello, world';
showMessage(message);

console.log(num);

//alert('hello!')

/*function showUserMessage(from, text){
    alert(from + ': ' + text)
}

let userName = 'Vasya'

showUserMessage(userName, 'Hello');
showUserMessage('Anna', 'Hi! How are you!')

function showPrettyMessage(from, text){
    from = '*' + from + '*';
    alert(from + ': ' + text)
}

showPrettyMessage(userName, 'Nice to see you!')
alert(userName);*/

//-----------------
function sum(a, b){
    let sum = a + b;
    return sum;
}

let result = sum(5,6);

console.log(sum(20,34) + result);
console.log(result);

function checkAge(age){
    if(age>18){
        return true;
    }else{
        return confirm('Parents allow?');
    }
}

/*function checkAge(age){
    return (age>18) ? true : false
}*/

function showMovie(age){
    if(checkAge(age)){
        alert('You show movie ...')
    }else{
        alert('No permission')
    }
}

let ageUser = +prompt('enter your age!')
showMovie(ageUser);

const logger = function(){
    console.log('hello!')
}

logger();

function learnLanguage(lang, callback){
    console.log(`I learn: ${lang}`);
    callback();
}

function showText(){
    console.log('I like it');
}

learnLanguage('JavaScript', showText);
learnLanguage('English', function(){console.log("It's very hard")});
learnLanguage('Russian', 'one');

function askAgree(question, yes, no){
    if(confirm(question)){
        yes();
    }else{
        no();
    }
}

askAgree('Are you agree?', function(){alert('You agree')}, function(){
    alert("You don't agree")
})

/*const calc = (a,b) => {
    a *=2;
    b *=5;
    return a + b;
}*/

const calc = (a,b) => b-a;

console.log(calc(4,5));

