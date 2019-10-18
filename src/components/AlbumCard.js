import React, { Component } from 'react';
import './AlbumCard.css'

class AlbumCard extends Component {
  render() {
    return(
      <div className="album-card">
        <a href={`/albums/${this.props.id}`}>
          <img
            src={this.props.cover}
            alt="album"
            height="200"  
            width="200"
          />
        </a>
        <div className="under-data">
          {/* <p>id: {this.props.id}</p> */}
          <p className="name">{this.props.name}</p>
          <p className="number">{this.props.number} fotos</p>
          <p className="type">{this.props.hard_cover ? 'Pasta dura': 'Pasta suave'}</p>
        </div>
        
      </div>
    );
  }
}

export default AlbumCard;