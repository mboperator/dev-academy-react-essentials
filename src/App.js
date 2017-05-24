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
        <img src={this.props.imgSrc} style={{ height: 200 }}/>
        <h2>{this.props.pokemanName}</h2>
        <p>{this.props.pokemanNumber}</p>
      </div>
    )
  }
}

const responseToJSON = (response)=> {
  return response.json()
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  findPokemon = (searchTerm) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
    .then(responseToJSON)
    .then((json)=> {
      console.log('I received', json);
      this.setState({ pokemanNumber: json.id });
      this.setState({ pokemanName: json.name });
      this.setState({ imgSrc: json.sprites.back_default });
    })
    .catch(e => console.error(e));
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
          imgSrc={this.state.imgSrc}
          pokemanName={this.state.pokemanName}
          pokemanNumber={this.state.pokemanNumber}
        />
      </div>
    );
  }
}

export default App;
