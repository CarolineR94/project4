import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return(
    <div>
      <div className="container home-container"></div>
      <div className="home-text">
        <h1 className="title is-1">Welcome to lingpost.</h1>
        <h1 className="subtitle is-3">the community translated blog</h1>
        <Link to={'/articles'}><button className="button is-rounded is-large homepage-button"><h1>View posts</h1></button></Link>
      </div>
    </div>
  );
};

export default Home;
