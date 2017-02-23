import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import Recipe from './Recipe';
import RecipeActionTypes from './RecipeActionTypes';
import RecipeDispatcher from './RecipeDispatcher';

class RecipeStore extends ReduceStore {
  constructor() {
    super(RecipeDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case RecipeActionTypes.ADD_RECIPE:
        return state;

      default:
        return state;
    }
  }
}

export default new RecipeStore();
