const Book = ({book})=>{
    return(
        <div>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <img src={book.cover} alt="..."/>
            <p>{book.description}</p>
            <p>{book.pageQuantity}</p>
        </div>
    )
}

export default Book