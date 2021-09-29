import Header from './components/Header';
import TodoList from './components/TodoList';
import './App.css';
import Counter from './components/Counter';


function App({todos}) {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Header />
      <hr />
      <TodoList todos = {todos}/>
    </div>
  );
}

export default App;
