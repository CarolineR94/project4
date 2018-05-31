import React from 'react';

const NotFound = () => {

  return(
    <div>
      <h1 className="not-found">Uh oh.<br/>Page lost in translation</h1>
      {/* <div  className="404-image-container">
        <img className="404-image" src="../../assets/404_1.jpg"/>
      </div>
      <div  className="404-image-container">
        <img className="404-image" src="../../assets/404_2.png"/>
      </div>
      <div  className="404-image-container">
        <img className="404-image" src="../../assets/404_3.jpg"/>
      </div>
      <div  className="404-image-container">
        <img className="404-image" src="../../assets/404_4.jpg"/>
      </div>
      <div  className="404-image-container">
        <img className="404-image" src="../../assets/404_5.jpg"/>
      </div> */}
      <img className="image is-1by3" src="../../assets/404_6.png"/>
    </div>
  );
};

export default NotFound;
