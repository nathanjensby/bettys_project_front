import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipeCardsContainer extends Component {
  render() {
    return (
      <div>
        <h1>This is the recipes container!</h1>
        <Recipe></Recipe>
        <Recipe></Recipe>
        <Recipe></Recipe>
        <Recipe></Recipe>
      </div>
    )
  }
}
export default RecipeCardsContainer;
