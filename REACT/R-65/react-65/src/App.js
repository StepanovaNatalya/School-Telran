
import './App.css';
import Counter from './components/Counter';
import PlaceHolderPost from './components/posts/PlaceHolderPost';
import PostPage from './components/posts/PostPage';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr/>
      <PostPage />
      <hr />
      <PlaceHolderPost/>
    </div>
  );
}

export default App;
