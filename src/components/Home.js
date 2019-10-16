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
      if (response.data.success) {
        this.setState({albums: response.data.data})
      }
      console.log('albums', this.state.albums)
    })
  }

  render() {
    return(
      <div className="main-container">
        {
          this.state.albums.map((elem, i) => {
            return (
              <div key={i}>
                <p>{elem.id}</p>
              </div>
            )
          })
        }
        {/* <p>wpoef</p> */}
        
      </div>
    );
  }
}

export default Home;