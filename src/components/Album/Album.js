import React, { Component } from 'react';
import PhotoCard from './PhotoCard';
import { getAlbumPictures } from '../../services';
import './Album.css'

class Album extends Component {
  constructor(props){
    super(props);
    this.state = {
      photos: []
    }
  }

  componentDidMount() {
    getAlbumPictures().then(response => {
      if (response.data.success) {
        console.log('resp:', response)
        this.setState({
          photos: response.data.data.photos
        })
        console.log('photos', this.state.photos)
      }
    })
  }

  render() {
    return(
      <div className="album-container">
        {
          this.state.photos.map((item, i) => (
            <div key={i} className={i%2 === 0 ? 'image-left' : 'image-right'}>
              <PhotoCard
                image={item.image_url}
              />
            </div>
        ))}

        
      </div>
    );
  }
}

export default Album;