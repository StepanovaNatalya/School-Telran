import '../css/App.css';
import Main from './Main';

// import Title from './Title';
// import PostList from './PostList';


function App() {
  return(
    <div className="App">
       <Main />
    </div>
  )
}

export default App
 
 

  

  

  


 /*  changeCounter = (id, key) => {
    const newPosts = [...this.state.posts]
    const index = newPosts.findIndex(post => post.id === id)

    if (index >= 0) {    
      const post = { ...newPosts[index] };
      post[key]++ 
      newPosts[index] = post; 

      this.setState({...this.state, posts: newPosts})
      }

  }

  onLikeClickHandler = (id) => {
    this.changeCounter(id, 'like')

  }
  onDisClickHandler = (id) => {
    this.changeCounter(id, 'dislike')

  }

      render({
  return (
    <div className="App">
      <Title />
      <MyContext.Provider value={{
          onLikeClickHandler: this.onLikeClickHandler,
          onDisClickHandler: this.onDisClickHandler
      }}>
           <PostList posts={this.state.posts}/>
        </MyContext.Provider>
       
    </div>
  );
} */
// }


