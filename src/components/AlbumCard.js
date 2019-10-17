import React, { Component } from 'react';


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
          <p>id: {this.props.id}</p>
          <p>{this.props.name}</p>
          <p>{this.props.number} fotos</p>
          <p>{this.props.hard_cover ? 'Pasta dura': 'Pasta suave'}</p>
        </a>
      </div>
    );
  }
}

export default AlbumCard;