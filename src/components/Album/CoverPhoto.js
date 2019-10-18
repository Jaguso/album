import React from 'react';
import './CoverPhoto.css'


function CoverPhoto(props) {
  return (
    <div className="cover-photo-container">
      <div className="book-container">
        <div className="left-page">
          
        </div>
        <div className="fight-page">
          <img
            src={props.photo}
            alt="photo"
            height="200"
            width="200"
          />
        </div>

      </div>
      <div className="button-container">
        <button>Cambiar portada</button>
      </div>

    </div>
  );
}

export default CoverPhoto;