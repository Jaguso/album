import React, { Component } from 'react';
import PhotoCard from './PhotoCard';
import { getAlbumPictures } from '../../services';
import './Album.css'
import CoverPhoto from './CoverPhoto';
import ReactLoading from 'react-loading';

class Album extends Component {
  constructor(props){
    super(props);
    this.state = {
      photos: [],
      isLoading: true
    }
  }

  componentDidMount() {
    getAlbumPictures().then(response => {
      if (response.data.success) {
        this.setState({
          photos: response.data.data.photos,
          isLoading: false
        })
      }
    })
  }

  render() {
    const cover_photo = this.state.photos.map(item => item.image_url)[0]
    return(
        this.state.isLoading ? 
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <ReactLoading type={"spin"} color={'gray'} height={'5%'} width={'5%'} />
        </div>
        :
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