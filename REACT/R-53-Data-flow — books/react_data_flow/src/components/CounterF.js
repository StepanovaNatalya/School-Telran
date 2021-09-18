import { useContext } from "react"
import { MyContext } from "./App"
// import { MyCnt } from "./AppF"



const CounterF = ({id, quantity}) => {
    const cnt = useContext(MyContext)

    return (
        <div className='counter'>
            <h4>Quantity: {quantity}</h4>
            <button onClick={()=>cnt.onDecClickHandler(id)}>-</button>
            <button onClick={()=>cnt.onIncClickHandler(id)}>+</button>
        </div>
     
    )

}

export default CounterF