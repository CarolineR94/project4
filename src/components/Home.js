import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return(
    <div>
      <h1>Welcome to lingpost.</h1>
      <h1>A community sourced blog The world is at your fingertips</h1>
      <Link to={'/articles'}><button className="button is-rounded is-large homepage-button"><h1>View posts</h1></button></Link>
    </div>
  );
};

export default Home;
