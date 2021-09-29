import {combineReducers} from 'redux'
import reducer from './counter/reducer'
import todoReducer from './todo/todoReducer'

export default combineReducers({
    counter: reducer,
    todos: todoReducer
})