import { createContext } from 'react';
import { IRecipeFields } from '../../contentful/fetchData';

export type RecipesContextData = {
  recipes: IRecipeFields[];
  isLoading: boolean;
  fetchRecipes: () => void;
  setStringSearch: (search: string) => void;
  search: string;
};

export const recipesDefaultValue: RecipesContextData = {
  recipes: [],
  isLoading: false,
  fetchRecipes: () => null,
  setStringSearch: () => null,
  search: '',
};

export const RecipesContext = createContext<RecipesContextData>(
  recipesDefaultValue
);
