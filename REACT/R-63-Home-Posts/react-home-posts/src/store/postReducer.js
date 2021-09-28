import * as Types from './actionsType'

const init = {
    posts: []
}

export default function postReducer(state=init, {type, payload}) {
    switch(type){
        case Types.ADD_TITLE:
            return{
                ...state,
                posts: [...state.posts, {title: payload.inputTitle}]
            }

        case Types.ADD_TEXT:
            return{
                ...state,
                posts: [...state.posts, {text: payload.inputText}]
            }  

        case Types.ADD_NAME:
            return{
                ...state,
                posts: [...state.posts, {name: payload.inputName}]
            }    
            default:
        return state
    }
    
}