export const getBooks = ()=>{
    return JSON.parse(localStorage.getItem('books'))
}

export const setBooksToLocalStorage = books =>{
    localStorage.setItem('books', JSON.stringify(books))
}