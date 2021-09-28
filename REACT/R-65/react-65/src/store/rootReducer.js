import {combineReducers} from 'redux'
import postReducer from './posts/postsReducer'
import counterReducer from './counter/counterReducer'
import placeHolderReducer from './placeHolderReducer'

export default combineReducers({
    counterReducer,
    postReducer,
    placeHolderReducer
})