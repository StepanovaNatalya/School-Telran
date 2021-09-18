const now = new Date(2020, 5, 1, 20, 40);

console.log(now)
//-----------------------------

const now1 = new Date(0); //1 Jun 1970

console.log(now1)
//-----------------------

const now2 = new Date(-99999)
//----------------------

const now3 = new Date();
console.log(now3.getFullYear())
console.log(now3.getMonth())
console.log(now3.getDate())
console.log(now3.getDay())
console.log(now3.getHours())
console.log(now3.getUTCHours()) // grinvech 7
console.log(now3.getTimezoneOffset())  //-120
console.log(now3.getTime())   //1629273320776

now3.setHours(20); //time +20 hours
console.log(now3)
//---------------------

//const start = new Date();
const start = Date.now();

for(let i = 0; i < 100000; i++){
    let some = i**3;
}
//const end = new Date();
const end = Date.now()
console.log(`loop work time is: ${end-start} millisecond`)

//---------------------------

const deadline = new Date('2021-12-31');
const daysLeft = (deadline - new Date());
console.log(daysLeft);

const days = Math.floor(daysLeft/(24*60*60*1000)), //10 -> 10 * 24 * 60 * 60 * 1000   //days

    hours = Math.floor((daysLeft/(60*60*1000))%24),  // hours
    minutes = Math.floor((daysLeft/(60*1000))%60),
    seconds = Math.floor((daysLeft/1000)%60)

    console.log(days, hours, minutes, seconds)