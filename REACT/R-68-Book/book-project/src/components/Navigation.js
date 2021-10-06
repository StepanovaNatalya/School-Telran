import {NavLink} from 'react-router-dom'
import './../css/Navigation.css'

const Navigation =()=>{
    return(
         <nav className="nav">
             <div>
                 <ul>
                     <li>
                         <NavLink exact to="/">
                             Home
                         </NavLink>
                     </li>
                     <li>
                         <NavLink to="/books">
                             Books
                         </NavLink>
                     </li>
                     <li>
                         <NavLink to="/add_book">
                             Add book
                         </NavLink>
                     </li>
                 </ul>
             </div>
         </nav>
    )
}

export default Navigation