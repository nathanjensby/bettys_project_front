import React, { Component } from 'react';
import logo from './logo.svg';
import CategoriesContainer from './components/CategoriesContainer';
import Category from './components/Category';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Recipe Box</h2>
        </div>
        <CategoriesContainer>

        </CategoriesContainer>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
