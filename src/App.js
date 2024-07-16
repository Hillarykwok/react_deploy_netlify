//Header Nav Footer remains on all pages
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
//these are the 5 different route
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
//import {Route, Routes, useHistory} from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import EditPost from './EditPost';
//import {DataProvider} from './context/DataContext';
import {useEffect} from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import {useStoreActions} from 'easy-peasy';

/*
        <Route path="/" >
          <Home />
        </Route>
        <Route path="/post">
          <NewPost />
        </Route>
        <Route path="/post/:id">
          <PostPage />
        </Route>
*/

function App() {
  const setPosts = useStoreActions((actions)=> actions.setPosts);
  const {data, fetchError, isLoading}= useAxiosFetch('http://localhost:3500/posts');

  useEffect(()=>{
    setPosts(data);
  }, [data, setPosts])

  
  //axios automatically catches error and dont need response.json
  /*
  useEffect(()=>{
    const fetchPosts = async()=>{
      try{
        const response= await api.get('/posts');
        setPosts(response.data);
      }catch(err){
        if (err.response){
        //Not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        } else{
        console.log(`Error: ${err.message}`);
      }
    }
  }
  fetchPosts();
  }, [])
  */
  //will run everytime posts or search changes

  // we shifted everything above to datacontext file
  return (
    <div className="App">
      
        <Header 
          title="React JS Blog"/>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home 
          isLoading={isLoading} 
          fetchError={fetchError}
          
          />} />
          <Route path="/post" element={<NewPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<PostPage/>} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        
        <Footer />
      
    </div>
  );
}

export default App;
