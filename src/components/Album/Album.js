import React, { Component } from 'react';
import { getAlbumPictures } from '../../services';

class Album extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.match.params.id,
      photos: []
    }
  }

  componentDidMount() {
    getAlbumPictures().then(response => {
      console.log('resp:', response.data)

    })
  }

  render() {
    return(
      <div>
        <p>osdifj</p>
      </div>
    );
  }
}

export default Album;