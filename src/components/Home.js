import React, { Component } from 'react';
import './Home.css';
import AlbumCard from './AlbumCard';
import { getAlbums } from '../services';
import ReactLoading from 'react-loading';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      isLoading: true
    }
  }

  componentDidMount() {
    getAlbums().then(response => {
      if (response.data.success) {
        this.setState({
          albums: response.data.data,
          isLoading: false
        })
      }
    })
  }

  render() {
    return(
      <div className="main-container">
        {this.state.isLoading ? 
          <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ReactLoading type={"spin"} color={'gray'} height={'5%'} width={'5%'} />
          </div>
        :
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