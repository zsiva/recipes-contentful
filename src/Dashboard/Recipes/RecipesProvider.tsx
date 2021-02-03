import { createContext } from 'react';
import { IRecipeFields } from '../../utils/contentful/fetchData';

export type RecipesContextData = {
  recipes: IRecipeFields[];
  isLoading: boolean;
  fetchRecipes: (locale: string) => void;
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
