import React from 'react'
import { useStoreState } from 'easy-peasy';

const Footer = () => {
  //const today= new Date();
  const postCount = useStoreState((state)=> state.postCount);
  return (
    <footer className='Footer'>
      <p>{postCount} Blog Posts</p>
    </footer>
  )
}
//<p>Copyright &copy; {today.getFullYear()}</p>
export default Footer
