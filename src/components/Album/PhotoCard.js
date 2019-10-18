import React from 'react';
import './PhotoCard.css';

function PhotoCard(props) {
  return(
    <div className="photo-container">
      <img
        src={props.image}
        alt="photo"
        height="110"
        width="150"
      />
      
    </div>
  );
}

export default PhotoCard;