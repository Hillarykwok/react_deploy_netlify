import React from 'react'
//import {useState, useContext} from 'react';
//import DataContext from './context/DataContext';
import {useNavigate} from 'react-router-dom';
//import api from './api/posts';
import {format} from 'date-fns';
import { useStoreState, useStoreActions } from 'easy-peasy';
const NewPost = () => {
  //taken from datacontext file
  //const [postTitle, setPostTitle]= useState('');
  //const [postBody, setPostBody]= useState('');
  //const {posts, setPosts} = useContext(DataContext);
  const navigate = useNavigate();
  const posts=useStoreState((state)=>state.posts);
  const postTitle=useStoreState((state)=>state.postTitle);
  const postBody=useStoreState((state)=>state.postBody);

  const savePost=useStoreActions((actions)=>actions.savePost);
  const setPostTitle=useStoreActions((actions)=>actions.setPostTitle);
  const setPostBody=useStoreActions((actions)=>actions.setPostBody);

  const handleSubmit= (e)=>{
    e.preventDefault();
    
    const lastId = posts.length ? parseInt(posts[posts.length - 1].id) : 0;
    
    const id = (lastId + 1).toString();
    console.log(posts[posts.length-1].id);
    console.log(id);
    const datetime= format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title:postTitle, datetime, body:postBody};
    savePost(newPost);
    navigate("/");
    
  }

  return (
    <main className="NewPost">
      <h2>NewPost</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e)=>setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post</label>
        <textarea 
          id="PostBody"
          required
          value={postBody}
          onChange={(e)=>setPostBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default NewPost
