import {counterActionType as Action} from './actionsType'

const initState = {
    count: 0
}

export default function reducer(state= initState, {type, payload}) {
    switch(type){
        case Action.inc:
            return {...state, count: state.count +1}
        case Action.dec:
            return {...state, count: state.count -1}    
        case Action.addNum:
            return {...state, count: state.count + payload.num}    
        case Action.subNum:
            return {...state, count: state.count - payload.num}    
        default:
            return state
    }
}