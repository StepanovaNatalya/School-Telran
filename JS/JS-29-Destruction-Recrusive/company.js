///////////////////////////////////////////////

/* const company = {
    name: 'ABC', 
    team: [],
} */
function start(){
    const company = createCompany('ABC', 10);
    const DOC = createDoc('ADAC-July', company.team);
console.log(company)
console.log(DOC);
}

function createCompany(name, qty) {
    return {
        name: name,
        qty: qty,
        team: createTeam(qty),
    };
}

function createTeam(quantity) {
    const team = [];
    for (let i = 0; i < quantity; i++) {
        team.push({
            name: `employee_${i + 1}`,
            hours: Math.floor(Math.random() * 120),
            rate: 30
        })
    }
    return team;
}

//{name: 'Vasya', hours: 120, rate: 30}

/* company.team.push({name: 'Vasya', hours: 120, rate: 30})
for(let i=0; i<9; i++){
    company.team.push({
        name: `employee_${i+1}`, 
        hours: Math.floor(Math.random()*120), 
        rate: 30})
} */

//console.log(company.team);

/* const doc = {
    name: 'DOC',
    list: [],
    total: 0
} */

function createDoc(name, personals) {
    return {
        name: name,
        list: createList(personals),
        total: getTotal(personals),
    }
}

function createList(team){
    let list =[];
    for(let i = 0; i < team.length; i++){
        list.push({
            name: team[i].name,
            salary: team[i].hours*team[i].rate,
        })
    }
    return list;
}

function getTotal(team){
    let sum = 0;
    for(let i = 0; i < team.length; i++){
        sum += team[i].hours*team[i].rate;
    }
    return sum;
}