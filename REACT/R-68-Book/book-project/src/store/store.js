import { combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import AppReducer from './appReducer/AppReducer'
import BookReducer from './bookReducer/BookReducer'

const state = combineReducers({
    AppReducer,
    BookReducer
})

const store = createStore(state, applyMiddleware(thunk))

export default store