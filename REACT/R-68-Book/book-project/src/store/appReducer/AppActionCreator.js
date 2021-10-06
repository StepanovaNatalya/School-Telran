import AppActionTypes from "./AppActionTypes";

export const showLoader = ()=>{
    return{
        type: AppActionTypes.showLoader
    }
}

export const hideLoader = ()=>{
    return{
        type: AppActionTypes.hideLoader
    }
}
