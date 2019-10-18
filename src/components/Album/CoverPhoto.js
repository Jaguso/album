import React from 'react';
import './CoverPhoto.css'


function CoverPhoto(props) {
  return (
    <div className="cover-photo-container">
      <div className="book-container">
        <div>
          <p>sdoijf</p>
        </div>
        <div>
          <img
            src={props.photo}
            alt="photo"
            height="200"
            width="200"
          />
        </div>

      </div>

    </div>
  );
}

export default CoverPhoto;