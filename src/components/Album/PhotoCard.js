import React from 'react';
import './PhotoCard.css';

function PhotoCard(props) {
  return(
    <div className="photo-container">
      <img
        src={props.image}
        alt="photo"
        height="150"  
        width="200"
      />
      
    </div>
  );
}

export default PhotoCard;