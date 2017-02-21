import React, { Component } from 'react';
import CategoriesContainer from './components/CategoriesContainer';
import RecipeCardsContainer from './components/RecipeCardsContainer';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: {}
    }
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the Recipe Box</h2>
        </div>
        <SearchBar>

        </SearchBar>

        <CategoriesContainer>

        </CategoriesContainer>

        <RecipeCardsContainer>

        </RecipeCardsContainer>

      </div>
    );
  }
}

export default App;
