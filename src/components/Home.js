import React, { Component } from 'react';
import './Home.css';
import AlbumCard from './AlbumCard';
import { getAlbums } from '../services';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    getAlbums().then(response => {
      console.log(response.data)
      if (response.data.success) {
        this.setState({albums: response.data.data})
      }
      console.log('albums', this.state.albums)
      console.log(this.state.albums.map(item => item.id))
    })
  }

  render() {
    return(
      <div className="main-container">
        {
          this.state.albums.map((item, i) => (
            <div key={i}>
              <AlbumCard
                id={item.id}
                cover={item.cover_url}
                name={item.name}
                number={item.images_count}
                hard_cover={item.hard_cover}
              />
            </div>
        ))}
        
      </div>
    );
  }
}

export default Home;