//Task01
/*Отсортировать массив users по возрасту */
const users = [{
    name: 'Anna',
    adress: {
        city: 'Berlin',
        country: 'Germany'
    },
    age: 32
},

{ name: 'Vasya', address: { city: 'Tokio', country: 'Japan' }, age: 28 },
{ name: 'Mariya', address: { city: 'London', country: 'England' }, age: 15 },
{ name: 'Mark', address: { city: 'Rom', country: 'Italy' }, age: 46 },
{ name: 'Sofi', address: { city: 'Verona', country: 'Italy' }, age: 38 },
{ name: 'Sergio', address: { city: 'Barcelona', country: 'Spain' }, age: 18 }
];

// variant 1 ------------

/* users.sort((a, b) => a.age - b.age);
console.log(users); */

// variant 2 ------------

function sortByField(key){
    return (a, b) => a[key] > b[key] ? 1 : -1;
}

console.log(users.sort(sortByField('age')));
     
//-------------------------------------------------------------
  //Task02
/*
[1,5,8,4,6,9,3,10];
function filterRange (array,1,4) -> [1,3,4]
*/

array = [1,5,8,4,6,9,3,10];

// variant 1 -------------------
/* function filterRange(array, min, max){
    let filterRange = array.filter(num => num >= min <= max).sort((a,b)=> a-b);
    return filterRange
}

console.log(filterRange(array,1,4)) */

// variant 2 -------------------
function filterRange2 (array, min, max){
      const masive = [...array].sort((a, b) => a - b);
      for(let i = 0; i < massive.length; i++){
         if(massive[i] < min){
              massive.splice(i,1)
              i--
         }
         if(massive[i] > max){
             massive.splice(i)
             break;
         }
      }
      return massive;
}

//console.log(filterRange2(array,1,4));

//-------------------------------------------------------------
   //Task03
/*
Отсортировать массив в порядке убывания
[7,3,8,9,10,2] -> [10,9,8,7,3,2]
*/

let array2 = [7,3,8,9,10,2];

array2.sort((a, b) => b - a);
console.log(array2);

/* 
 Task04
    Сгенерировать штатное расписание, у сотрудников есть поля: имя, часы работы и ставка, стоимость часа, создать ведомость, в которой будет список сотрудников, с подсчитанной зарплатой и общая сумма всех зарплат.
*/

const company = { 
    name: 'ABC',
    team: [],  
}

// {name: 'Vadya', hours: 120, rate: 30}

company.team.push({name: 'Vasya', hours: 120, rate: 30});

for(let i = 0; i < 9; i++){
    company.team.push({
        name: `employee ${i + 1}`,
        hours: Math.floor(Math.random() * 120),
        rate: 30,
    })
}

console.log(company.team);

const doc = {
    name: 'DOC',
    list: [],
    total: 0
}

for(let i = 0; i < company.team.length; i++){
    const sum = company.team[i].hours * company.team[i].rate;
    doc.list.push({
        name: company.team[i].name,
        salary: sum,
    })
    doc.total += sum
}

console.log(doc.list);
console.log(doc.total)