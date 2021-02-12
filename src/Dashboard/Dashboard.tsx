import React from 'react';
import Banner from './Banner';
import { RecipesContext } from './Recipes/RecipesProvider';
import RecipesList from './Recipes/RecipesList';
import { useRecipesContextValue } from './Recipes/useRecipesContextValue';

const Dashboard = () => {
  const recipesContextValue = useRecipesContextValue();
  return (
    <RecipesContext.Provider value={recipesContextValue}>
      <main>
        <Banner />
        <RecipesList />
      </main>
    </RecipesContext.Provider>
  );
};

export default Dashboard;
