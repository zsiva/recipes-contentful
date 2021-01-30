import { useState, useCallback, useMemo } from 'react';
import { RecipesContextData } from './RecipesProvider';
import { IRecipeFields, fetchContentData } from '../../contentful/fetchData';

export const useRecipesContextValue = (): RecipesContextData => {
  const [recipes, setRecipes] = useState<IRecipeFields[]>([]);
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
    }),
    [recipes, isLoading, fetchRecipes, setStringSearch, search]
  );
};
