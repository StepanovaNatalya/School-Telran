import BookActionType from "./BookActionType";
import { showLoader, hideLoader } from "../appReducer/AppActionCreator";
import * as BooksData from './../../data/booksData'
import AppActionTypes from "../appReducer/AppActionTypes";

export const initState = () =>{
    return dispatch =>{
        dispatch({type: AppActionTypes.showLoader})
        setTimeout(()=>{
            const data = {
                books: BooksData.getBooks()
            }
            dispatch({type: BookActionType.initState, payload: {...data}})
        }, 2000)
    }
}

export const showAllBooks = () => {
    return {
        type: BookActionType.showAllBooks
    }
}

/* export const showBook = (index, book) => {
    return {
        type: BookActionType.showBook,
        payload: {
            index,
            book
        }
    }
} */

export const addBook = (id, title, author, cover, description, pageQuantity) => {
    return dispatch => {
        dispatch(showLoader())
        setTimeout(() => {
            dispatch(_addBook(id, title, author, cover, description, pageQuantity))
            dispatch(hideLoader())
        }, 2000)
    }
}

const _addBook = (id, title, author, cover, pageQuantity) => {
    return {
        type: BookActionType.addBook,
        payload: {
            newBook: {
                id,
                title,
                author,
                cover,
                description,
                pageQuantity
            }
        }
    }
}