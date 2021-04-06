import { useState, useCallback, useMemo } from 'react';
import { RecipesContextData } from './RecipesProvider';
import { IRecipeFields } from '../../utils/contentful/types';
import config from '../../config';

export const useRecipesContextValue = (): RecipesContextData => {
  const [recipes, setRecipes] = useState<IRecipeFields[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchRecipes = useCallback(
    async (locale: string) => {
      setIsLoading(true);
      try {
        const response = await fetch(`${config.baseUrl}/api/recipes`, {
          headers: { 'Accept-Language': locale }
        });
        const recipes = await response.json()
        setRecipes(recipes);
      } catch {
        setHasError(true)
      }
      setIsLoading(false);
    },
    [setRecipes]
  );

  const toggleFilters = useCallback(
    (item: string) => {
      const currentFilters = filters.includes(item)
        ? filters.filter((i) => i !== item)
        : [...filters, item];
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
      hasError
    }),
    [
      recipes,
      isLoading,
      fetchRecipes,
      setStringSearch,
      search,
      toggleFilters,
      filters,
      hasError
    ]
  );
};
