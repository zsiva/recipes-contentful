import { useState, useCallback, useMemo } from 'react';
import { RecipesContextData } from './RecipesProvider';
import { IRecipeFields, fetchContentData } from '../../contentful/fetchData';

export const useRecipesContextValue = (): RecipesContextData => {
  const [recipes, setRecipes] = useState<IRecipeFields[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipes = useCallback(async () => {
    setIsLoading(true);
    const data = await fetchContentData('en-US');
    setRecipes(data);
    setIsLoading(false);
  }, [setRecipes]);

  return useMemo(
    () => ({
      recipes,
      isLoading,
      fetchRecipes,
    }),
    [recipes, isLoading, fetchRecipes]
  );
};
