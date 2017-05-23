import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Search extends Component {
  runSearch = () => {
    this.props.searchFunction(this.searchValue.value)
  }

  render () {
    return (
      <div>
        <input
          ref={(element) => { this.searchValue = element }}
          placeholder="Enter a Pokeman"
        />
        <button onClick={this.runSearch}>Who's that Pokemon?</button>
      </div>
    )
  }
}

class Pokecard extends Component {
  render () {
    return (
      <div>
        <img src={this.props.imgSrc}/>
        <h2>{this.props.pokemanName}</h2>
        <p>{this.props.pokemanNumber}</p>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  findPokemon = (searchTerm) => {

      fetch(`http://pokeapi.co/api/v2/pokemon/${searchTerm}`).then((response)=> {
          return response.json()
      }).then((json)=> {
        this.setState({pokemanNumber: json.id})
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pokepedia</h2>
          <Search searchFunction={this.findPokemon}/>
        </div>
        <Pokecard
          imgSrc="https://s-media-cache-ak0.pinimg.com/originals/e8/e7/b7/e8e7b71dc7349968cfa88364194d97e9.jpg"
          pokemanName="A cute Pikachu"
          pokemanNumber={this.state.pokemanNumber}
        />
      </div>
    );
  }
}

export default App;
