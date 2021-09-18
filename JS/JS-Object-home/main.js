const salaries = {
    John: 2000,
    Anna: 2100,
    Piotr: 2500,
    Kate: 1900,
}


// Task 1 "calculate and print summe of all salaries"

let summe = 0;

for (let key in salaries) {
    summe += salaries[key];
}

console.log(`Summe of all salaries: ${summe}`)

// Task 3 "add two employee in object with salary"

salaries.Natalya = 3000;
salaries.Alex = 2900;

console.log(`Add two employee: Natalya ${salaries.Natalya} and Alex ${salaries.Alex}`)
console.log(salaries)


// Task 2 "John has salary: 2000, Kate has salary: 1900"

//--1v--
console.log(`John has salary: ${salaries.John}, Kate has salary: ${salaries.Kate}`);

//--2v--
let countOfKeys = 0;

for (let key in salaries){
    countOfKeys++;
}
console.log(countOfKeys);

let count = 0;

for (let key in salaries){
    count++;
    /*if(count = 1 || count == countOfKeys)
        console.log(`${key} has salary: ${salaries[key]}`)*/   //--1v--

      if(count !=1 && count != countOfKeys) continue;     //--2v--
      console.log(`${key} has salary: ${salaries[key]}`)  
}

// Task 4 "find employee with maximal salery"

let maxSalary = 0;
let keyName ='';

for (let key in salaries) {
      if(salaries[key] > maxSalary){
      maxSalary = salaries[key];
      keyName = key
      }
}

console.log(`Max salary has ${keyName}, ${maxSalary}`)