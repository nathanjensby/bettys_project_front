import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this._handleSearch = this._handleSearch.bind(this)
  }
  _handleSearch(e) {
    console.log(e.target.value)
  }
  render() {
    return (
      <input type="text" placeholder='Search' ref="search" onChange={this._handleSearch}/>
    )
  }
}

export default SearchBar;
