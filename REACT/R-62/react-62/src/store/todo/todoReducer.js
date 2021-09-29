import Types from './actionsType'

const init = {
    todos:[]
}

export default function todoReducer(state = init, {type, payload}) {
    switch(type){
        case Types.add:
            return {
                ...state,
                todos: [...state.todos, {text: payload.text, status: false}]
            }

        case Types.remove:
            const tmpTodos = [...state.todos]
            tmpTodos.splice(payload.index, 1)
            return{
                ...state,
                todos:[...tmpTodos]
            } 
            
        case Types.change:
            const tempTodo = [...state.todos]
            tempTodo[payload.index] = {...tempTodo[payload.index], status: payload.status}
            return{
                ...state,
                todos:[...tempTodo]
            }    
        default:
            return state
    }
}