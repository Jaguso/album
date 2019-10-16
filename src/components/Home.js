import React, { Component } from 'react';
import './Home.css';
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
      this.setState({albums: response.data})
      console.log('albums', this.state.albums)
    })
  }

  render() {
    return(
      <div className="main-container">
        <p>wpoef</p>
        
      </div>
    );
  }
}

export default Home;