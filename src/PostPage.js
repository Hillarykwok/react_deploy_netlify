import React from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom';
//import {useContext} from 'react';
import DataContext from './context/DataContext';
//import api from './api/posts';
import { useStoreState, useStoreActions } from 'easy-peasy';

const PostPage = () => {
  //const {posts, setPosts}= useContext(DataContext);
  const {id} = useParams();
  const navigate = useNavigate();
  const deletePost= useStoreActions((actions)=> actions.deletePost);
  const getPostById= useStoreState((state)=>state.getPostById);
  //const post = posts.find(post=> (post.id).toString()===id);
  const post=getPostById(id);
      
  const handleDelete= (id)=>{
    deletePost(id);
    navigate("/");
  }

  return (
    <main className="PostPage">
      <article className="Post">
        {post && 
          <>
          <h2>{post.title}</h2>
          <p className='postDate'>{post.datetime}</p>
          <p className='postBody'>{post.body}</p>
          <Link to={`/edit/${post.id}`}><button className="editButton">Edit Post</button></Link>
          <button className="deleteButton" onClick={()=>handleDelete(post.id)}>
            Delete Post
          </button>
          </>
        }
        {!post &&
          <>
            <h2>Post Not Found</h2>
            <p> Well, that's dissapointing</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        }
      </article>
    </main>
  )
}

export default PostPage
