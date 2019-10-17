import React, { Component } from 'react';


class AlbumCard extends Component {
  render() {
    return(
      <div className="album-card">
        
        <img
          src={this.props.cover}
          alt="album"
          height="200"
          width="200"
          
        />
        <p>{this.props.name}</p>
        <p>{this.props.number} fotos</p>
        <p>{this.props.hard_cover ? 'Pasta dura': 'Pasta suave'}</p>
      </div>
    );
  }
}

export default AlbumCard;