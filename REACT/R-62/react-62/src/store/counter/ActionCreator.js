import { counterActionType as Action} from "./actionsType";

export const incCount = ()=>{
    return{
        type: Action.inc
    }
}

export const decCount = ()=>{
    return{
        type: Action.dec,
        payload:{
            num
        }
    }
}
export const addNum = ()=>{
    return{
        type: Action.addNum
    }
}
export const subNum = ()=>{
    return{
        type: Action.subNum,
        payload:{
            num
        }
    }
}

