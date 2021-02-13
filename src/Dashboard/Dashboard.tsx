import React from 'react';
import Banner from './Banner';
import { RecipesContext } from './Recipes/RecipesProvider';
import RecipesList from './Recipes/RecipesList';
import { useRecipesContextValue } from './Recipes/useRecipesContextValue';
import FiltersContainer from './Filters/FiltersContainer';
import { FiltersContext } from './Filters/FiltersProvider';
import { useFiltersContextValue } from './Filters/useFiltersContextValue';

const Dashboard = () => {
  const recipesContextValue = useRecipesContextValue();
  const filtersDefaultValue = useFiltersContextValue();
  return (
    <RecipesContext.Provider value={recipesContextValue}>
      <main>
        <Banner />
        <FiltersContext.Provider value={filtersDefaultValue}>
          <FiltersContainer />
          <RecipesList />
        </FiltersContext.Provider>
      </main>
    </RecipesContext.Provider>
  );
};

export default Dashboard;
