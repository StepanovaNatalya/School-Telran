/* function division(a,b){
    if(b===0){
        throw new Error('division by zero')
    }
    return a/b
}

try{
    console.log(division(4,0));
}catch(err){
    console.log(err.message)
}

//console.log(division(4,0));
console.log('hello!') */

function f1(){
    if(Math.random() >0.5){
        throw new Error('something is wrong!')
    }
    return 100;
}

/* const result = f1();
console.log(result); */

try{
    const result = f1();
console.log(result);
}catch(error){
    console.log(error.message)
}finally{
    console.log('finaly')
}

console.log('hello')