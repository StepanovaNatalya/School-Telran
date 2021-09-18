// monday

/* function checkWeekDay(str) {
    switch (str) {
        case 'monday': console.log('first work day')
        // break;
        case 'wendnesday': console.log('second work day')
            break;
        case 'sunday': console.log('weekend')
            break;
        default: console.log('wrong day')
    }
}

ckeckWeekDay('monday') */
/* checkWeekDay('wednesday')
checkWeekDay('sunday')
checkWeekDay('no') */

/* function lightSwitch(num) {
    switch (num) {
        case 1: console.log('light on')
            break;
        case 2: console.log('light off')
            break;
    }
} */

/* switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  } */
  
function checkBrowser(browser){
    if(browser === 'Edge'){
        console.log(`You've got the Edge!`)
    }else if(browser === 'Chrome' || browser === 'Firebox' || browser === 'safari' ){
        console.log('Okay we support')
    }else
    console.log('aaaaaaaaa')
}
checkBrowser('Firebox')

///////////////////////////////////////////////

const arr = ['one', 'two', 'three']

console.log(arr.indexOf('two'))

/////////////////////////////////////////

const array = [2, 3, 5, 2, 7]

const sum = array.reduce((a, b) => a + b)
console.log(sum)

//--------------------

const users = [{
    name: 'Vasa',
    age: 30
},
{
    name: 'Kolya',
    age: 20
},
{
    name: 'Peeetya',
    age: 50
}]

const oldestUser = users.reduce((a, b) => a.age > b.age ? a : a = b)

console.log(oldestUser)

const sumAge = users.reduce((sum, user) => sum += user.age, 0)
console.log(sumAge)

const longName = users.reduce((longName, user) => longName.name.length > user.name.length ? longName : longName = user)
console.log(longName)

//------------

const newArray = users.map(el => `${el.name}, ${el.age}`)

console.log(newArray)

const userAge = users.map(el => el.age)
console.log(userAge)

//---------------

users.forEach((user, index) => user.id = index)

console.log(users)