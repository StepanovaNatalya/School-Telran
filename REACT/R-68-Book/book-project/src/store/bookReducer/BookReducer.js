import BookActionType from "./BookActionType";

const init = {
    books: [],
    currentBook: null
}

const bookReducer = (state = init, {type, payload})=>{
    switch(type){
        case BookActionType.initState:      //?
            return{
                ...state,
                books: [...payload.books],
                currentBook: payload.currentBook
            }
    
        case BookActionType.addBook:
            return{
                ...state,
                books: [ ...state.books, payload.newBook ],
                currentBook: payload          //?
            }
        /* case BookActionType.showAllBooks:
            return{
                ...state,
                books: [...payload.books],
                currentBook: payload.currentBook   //?
            } 
        case BookActionType.showBook:
            const newBooks = [...state.books]
            newBooks[payload.index] = {...newBooks}
            return{
                ...state,

            }  */      
        default: return state
    }
}

export default bookReducer