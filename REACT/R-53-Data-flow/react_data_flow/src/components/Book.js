import '../css/Book.css'
import Counter from './CounterF'
// import Button from './Button'
import { useContext } from "react"
import { MyContext } from './App'

export default function Book({book:{id, title, author, yearIssue, genre, cover, price, quantity}}){
    const {imgClickHandler} = useContext(MyContext)
    
    return(
        <div className = 'book'>
            <img src= {cover} alt = {title} onClick={()=>imgClickHandler(id)}/>
            <h2>{title}</h2>
            <h5>{author}</h5>
            <p>Genre: {genre}, years of issue:{yearIssue}</p>
            <h3>Price: {price}</h3>
            {/* <Button clickHandler = {(e)=>clickHandler(e,'w100')}/> */}
            <Counter id = {id}
                     quantity = {quantity}
                     />
            <h3 style={{color:'red'}}>Total: {price * quantity} &euro;</h3>
        </div>
    )
}

/* function clickHandler(e, className){
    console.log(e.target.parentNode);
    e.target.parentNode.querySelector('img').classList.toggle(className)
} */

/* function titleClickHandler(e){
    e.target.style.color = 'red'
} */