import * as Action from './actionsType'

const initState = {
    count: 0
}

export default function reducer(state= initState, {type, payload}) {
    switch(type){
        case Action.INC:
            return {...state, count: state.count +1}
        case Action.DEC:
            return {...state, count: state.count -1}    
        case Action.ADD_NUM:
            return {...state, count: state.count + payload.num}    
        case Action.SUB_NUM:
            return {...state, count: state.count - payload.num}    
        default:
            return state
    }
}