import { createContext } from 'react';
import { IRecipeFields } from '../../utils/contentful/fetchData';

export type RecipesContextData = {
  recipes: IRecipeFields[];
  isLoading: boolean;
  fetchRecipes: (locale: string) => void;
  setStringSearch: (search: string) => void;
  search: string;
  toggleFilters: (item: string) => void;
  filters: string[];
  hasError: boolean
};

export const recipesDefaultValue: RecipesContextData = {
  recipes: [],
  isLoading: false,
  fetchRecipes: () => null,
  setStringSearch: () => null,
  search: '',
  toggleFilters: () => null,
  filters: [],
  hasError: false
};

export const RecipesContext = createContext<RecipesContextData>(
  recipesDefaultValue
);
