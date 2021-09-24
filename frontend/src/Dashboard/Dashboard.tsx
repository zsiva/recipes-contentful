import React from 'react';
import Banner from './Banner';
import RecipesList from './Recipes/RecipesList';
import { FiltersContext } from './Filters/FiltersProvider';
import { useFiltersContextValue } from './Filters/useFiltersContextValue';

const Dashboard = () => {
  const filtersDefaultValue = useFiltersContextValue();
  return (
    <main>
      <Banner />
      <FiltersContext.Provider value={filtersDefaultValue}>
        <RecipesList />
      </FiltersContext.Provider>
    </main>
  );
};

export default Dashboard;
