import '../css/App.css';
import BookList from './BookList';
import Title from './Title';
import {getBooks} from '../store/store'

function App() {
  return (
    <div className="App">
       <Title title='Library'/>
       <BookList library = {getBooks()}/>
    </div>
  );
}

export default App;
