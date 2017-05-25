import React, { Component } from 'react';

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

export default Search;
