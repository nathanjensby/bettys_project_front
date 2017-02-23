import RecipeActionTypes from './RecipeActionTypes';
import RecipeDispatcher from './RecipeDispatcher';

const Actions = {
  addRecipe(text) {
    RecipeDispatcher.dispatch({
      type: RecipeActionTypes.ADD_RECIPE,
      text,
    });
  },
};

export default Actions;
