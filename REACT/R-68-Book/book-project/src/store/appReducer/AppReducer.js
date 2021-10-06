import AppActionTypes from "./AppActionTypes";

const init = {
    isLoading: false
}

const AppReducer=(state = init, {type}) =>{
    switch(type){
        case AppActionTypes.showLoader:
            return{
                ...state,
                isLoading: true
            }
        case AppActionTypes.hideLoader:
            return{
                ...state,
                isLoading: false
            }  
            default: return state   

    }
}

export default AppReducer