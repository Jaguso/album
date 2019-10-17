import React, { Component } from 'react';
import Photo from './Photo';
import { getAlbumPictures } from '../../services';

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
      <div>
        {
          this.state.photos.map((item, i) => (
            <div key={i}>
              <img
                src={item.image_url}
                width={item.width}
                height={item.height}
              />
              {/* <img
                src={item.print_url}
              /> */}
            </div>
        ))}

        
      </div>
    );
  }
}

export default Album;