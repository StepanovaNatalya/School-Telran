
const Button = ({clickHandler})=>{
    return(
        <button onClick = {clickHandler}>click me</button>
    )
}

// <button onClick = {(e)=> console.log(e)}>click me</button>

// function clickHandler(e){console.log(e)}

export default Button