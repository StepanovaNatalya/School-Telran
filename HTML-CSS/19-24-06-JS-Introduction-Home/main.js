// Task 1

let a = +prompt('первое число?', 1);
let b = +prompt('второе число?', 2);

//a = +a;
let summe = a + b;
console.log(typeof a);

alert(summe);

//===============================================================
// Task 2
// Спросить сколько стоит работа в час; Сколько часов в день работает;
// Вывести зарплату за месяц (22 рабочих дня в месяц);

let pricePerHour,
    countHoursPerDay;

const workDaysPerMonth = 22;    

pricePerHour = prompt('Enter price per hour');
countHoursPerDay = prompt('Enter count of hours per day');

//let salary = Number(pricePerHour) * Number(countHoursPerDay) * 22;

let salary = pricePerHour * countHoursPerDay * workDaysPerMonth;

alert('your salary is: ' + salary);
//=================================================================

// Task 3
// Спросить радиус, распечатать площадь круга;

const PI = 3.14;
const radius = Number(prompt('Enter radius'));

//let circleSquare = PI * radius * radius;
let circleSquare = PI * radius ** 2;

alert('Result: ' + circleSquare);