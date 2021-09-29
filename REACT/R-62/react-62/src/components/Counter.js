import {connect} from 'react-redux'
// import {counterActionType as Actions} from './../store/actionsType'
import * as Actions from './../store/counter/ActionCreator'
const Counter = ({count,inc,dec, addNum,subNum})=> {
    console.log(props, 'state from component')
    return(
        <>
           <h2>Count: {count}</h2>
           <button onClick= {dec}>-</button>
           <button onClick= {inc}>+</button>
           <br/>
           <button onClick = {()=>addNum(15)}>Add 15</button>
           <button onClick = {()=>subNum(20)}>Sub 20</button>
        </>
    )
}

const mapStateToProps = ({counterReducer})=>{
    return{
        count: counterReducer.count
    }
}

const mapDispatchToProps = dispatch=> {
    return{
        inc: ()=>dispatch(Actions.incCount),
        dec: ()=>dispatch(Actions.decCount),
        addNum: (num)=>dispatch(Actions.addNum(num)),
        subNum: (num)=>dispatch(Actions.subNum(num))   
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)