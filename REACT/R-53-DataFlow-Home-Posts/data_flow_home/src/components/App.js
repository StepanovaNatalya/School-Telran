import '../css/App.css';
import { useState } from 'react';
import Title from './Title';
import PostList from './PostList';
import { getPosts } from '../store/store';

const App = () => {
  const [posts, setPosts] = useState(getPosts());

  const changeCounter = (id, key) => {
    const newPosts = [...posts]
    const index = newPosts.findIndex(post => post.id === id)

    if (index >= 0) {    
      const post = { ...newPosts[index] };
      post[key]++ 
      newPosts[index] = post; 

      setPosts(newPosts)
      }

  }

  const onLikeClickHandler = (id) => {
    changeCounter(id, 'like')

  }
  const onDisClickHandler = (id) => {
    changeCounter(id, 'dislike')

  }


  return (
    <div className="App">
      <Title />
      <PostList posts={posts}
        onLikeClickHandler={onLikeClickHandler}
        onDisClickHandler={onDisClickHandler} />
    </div>
  );
}



export default App