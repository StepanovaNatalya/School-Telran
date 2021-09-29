import Types from './ActionTypes'

export const addTodo = ({index, todo})=>{
    return{
        type: Types.add,
        payload:{
            todo,
            index,
            // id: Data.now()
        }
    }
}