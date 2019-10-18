import React, { Component } from 'react';
import PhotoCard from './PhotoCard';
import { getAlbumPictures } from '../../services';
import './Album.css'
import CoverPhoto from './CoverPhoto';

class Album extends Component {
  constructor(props){
    super(props);
    this.state = {
      photos: [],
    }
  }

  componentDidMount() {
    getAlbumPictures().then(response => {
      if (response.data.success) {
        console.log('resp:', response)
        this.setState({
          photos: response.data.data.photos
        })
        console.log('photos', this.state.photos[0].image_url)
      }
    })
  }

  render() {
    const cover_photo = this.state.photos.map(item => item.image_url)[0]
    return(
      <div>
        
        <CoverPhoto
          photo={cover_photo}
        />
        <div className="album-container">
          {
            this.state.photos.map((item, i) => (
              <div 
                key={i} 
                className={i%2 === 0 ? 'image-left' : 'image-right'} 
              >
                <PhotoCard
                  image={item.image_url}
                />
              </div>
          ))}

          
        </div>
      </div>
    );
  }
}

export default Album;