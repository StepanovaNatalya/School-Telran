import { useState } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { useForm } from "react-cool-form"
import Field from "./Field"


const BookForm = ({ currentBook }) => {
    const { form, use } = useForm({
        defaultValues: { title: "", author: "", cover: "" , description:"", pageQnt:""},
        onSubmit: (values) => console.log("onSubmit: ", values),});
        const errors = use("errors", { errorWithTouched: true }); // Default is "false"

    const [book, setBook] = useState(currentBook)

    const changeFieldHandler = event => {
        setBook({ ...book, [event.target.title]: event.target.value })
    }

    const submitHandler = event => {
        event.preventDefault()
    }

    return (
        <>{!currentBook ? <Redirect to='/books' /> :
            <div>
                <h3>Book</h3>
                <div>
                    <form onSubmit={submitHandler}>
                        <div>
                            <label htmlFor="title">Title:</label>
                            <input type="text"
                                name="title"
                                id='title'
                                placeholder='type book title'
                                value={book.title}
                                onChange={changeFieldHandler}
                                autoFocus />
                        </div>
                        <div>
                            <label htmlFor="cover">img:</label>
                            <input type="text"
                                name="cover"
                                id="cover"
                                placeholder="type cover book"
                                value={book.cover}
                                onChange={changeFieldHandler} />
                        </div>
                        <div>
                            <label htmlFor="author">Author:</label>
                            <input type="text"
                                name="author"
                                id="author"
                                placeholder="type author"
                                value={book.author}
                                onChange={changeFieldHandler}
                                autoFocus />
                        </div>
                        <div>
                            <label htmlFor="description">Description:</label>
                            <textarea
                            id="description"
                                name="description"
                                value={book.description}
                                onChange={changeFieldHandler} >
                                    </textarea>
                        </div>
                        <div>
                            <label htmlFor="pageQnt">Page quantity</label>
                            <input type="number"
                                name="pageQuantity"
                                id="pageQnt"
                                placeholder="type quantity page"
                                value={book.pageQuantity}
                                onChange={changeFieldHandler} />
                        </div>
                        
                            <input type="submit"/>
                      
                    </form>
                </div>
            </div>
        }
        </>
    )
}

const mapStateToProps = ({ BookReducer }) => {
    return {
        currentBook: BookReducer.currentBook
    }
}

export default connect(mapStateToProps, null)(BookForm)