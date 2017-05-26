import React, { Component } from 'react';

class Pokecard extends Component {
  render () {
    return (
      <div>
        <img src={this.props.imgSrc} style={{ height: 200 }}/>
        <h2>{this.props.pokemanName}</h2>
        <p>{this.props.pokemanNumber}</p>
        <p>{this.props.pokemanDescription}</p>
      </div>
    )
  }
}

export default Pokecard;
