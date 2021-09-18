import React from 'react';
import { getPosts } from '../store/data'
import PostList from './PostList';
import Title from './Title'
import PostWithComments from './PostWithComments';

export const PostContext = React.createContext();

export default class Main extends React.Component {

    state = {
        // posts: getPosts()
        posts: getPostsFromJson(),
        currentPost: null
    }

    addComment = (id, author, text)=>{
        const posts = this.state.posts
        const index = posts.findIndex(post => post.postId === id)
        const comments = [...posts[index].comments, {author, text}]
        posts[index] = { ...posts[index].comments }
        this.setState({ ...this.state, currentPost: comments })
    }

    changeCurrentPost = (id) => {
        const posts = this.state.posts
        const index = posts.findIndex(post => post.postId === id) 
        const post = { ...posts[index] }
        this.setState({ ...this.state, currentPost: post })
    }

    /* showComment = ()=>{
        this.setState({...this.state})
    } */

    render() {
        return (
            <PostContext.Provider value= {{
                changeCurrentPost: this.changeCurrentPost,
                addComment: this.addComment
            }}>
                <div className='posts-list'>
                    <Title />
                    {this.state.currentPost ? <PostWithComments post={this.state.currentPost} /> :
                        <PostList posts={this.state.posts} />
                    }
                </div>
            </PostContext.Provider>
        )
    }
}

function getPostsFromJson() {
    const posts = JSON.parse(getPosts()).posts;
    console.log(posts)
    posts.forEach(element => {
        element.comments = [];
        element.countComments = 0
    });
    return posts
}
