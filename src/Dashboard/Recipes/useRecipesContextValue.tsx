import { useState, useCallback, useMemo } from 'react';
import { RecipesContextData } from './RecipesProvider';
import {
  IRecipeFields,
  fetchContentData,
} from '../../utils/contentful/fetchData';

export const useRecipesContextValue = (): RecipesContextData => {
  const [recipes, setRecipes] = useState<IRecipeFields[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipes = useCallback(
    async (locale: string) => {
      setIsLoading(true);
      const data = await fetchContentData(locale);
      setRecipes(data);
      setIsLoading(false);
    },
    [setRecipes]
  );

  const toggleFilters = useCallback(
    (item: string) => {
      const currentFilters = filters.includes(item)
        ? filters.filter((i) => i !== item) // remove item
        : [...filters, item]; // add item
      setFilters(currentFilters);
    },
    [setFilters, filters]
  );

  const setStringSearch = useCallback(
    async (searchString: string) => {
      setSearch(searchString);
    },
    [setSearch]
  );

  return useMemo(
    () => ({
      recipes,
      isLoading,
      fetchRecipes,
      setStringSearch,
      search,
      toggleFilters,
      filters,
    }),
    [
      recipes,
      isLoading,
      fetchRecipes,
      setStringSearch,
      search,
      toggleFilters,
      filters,
    ]
  );
};
