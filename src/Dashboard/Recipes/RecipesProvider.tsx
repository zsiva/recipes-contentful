import { createContext } from 'react';
import { IRecipeFields } from '../../contentful/fetchData';

export type RecipesContextData = {
  recipes: IRecipeFields[];
  isLoading: boolean;
  fetchRecipes: () => void;
};

export const recipesDefaultValue: RecipesContextData = {
  recipes: [],
  isLoading: false,
  fetchRecipes: () => null,
};

export const RecipesContext = createContext<RecipesContextData>(
  recipesDefaultValue
);
