import { Switch, Route } from "react-router-dom"
import Book from "./Book"
import BookForm from "./BookForm"
import Books from "./Books"
import Home from "./Home"

const Page =()=>{
    return(
        <Switch>
            <Route path = "/books" component={Books}/>
            <Route path = "/book/:id" component={Book}/>
            <Route path = "/add_book" component={BookForm}/>
            <Route path = "/" component ={Home}/>
        </Switch>
    )
}

export default Page