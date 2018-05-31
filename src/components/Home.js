import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return(
    <div>
      <h1>A community sourced worldwide blog</h1>
      <h1>The world is at your fingertips</h1>
      <Link to={'/articles'}><h1>View posts</h1></Link>
    </div>
  );
};

export default Home;
