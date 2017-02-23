import App from '../views/App';
import {Container} from 'flux/utils';
import RecipeActions from '../data/RecipeActions';
import RecipeStore from '../data/RecipeStore';

function getStores() {
  return [
    RecipeStore,
  ];
}

function getState() {
  return {
    recipes: RecipeStore.getState(),
  };
}

export default Container.createFunctional(App, getStores, getState);
