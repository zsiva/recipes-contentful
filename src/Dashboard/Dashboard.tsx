import React from 'react';
import Banner from './Banner';
import RecipesList from './Recipes/RecipesList';
import FiltersContainer from './Filters/FiltersContainer';
import { FiltersContext } from './Filters/FiltersProvider';
import { useFiltersContextValue } from './Filters/useFiltersContextValue';

const Dashboard = () => {
  const filtersDefaultValue = useFiltersContextValue();
  return (
    <main>
      <Banner />
      <FiltersContext.Provider value={filtersDefaultValue}>
        <FiltersContainer />
        <RecipesList />
      </FiltersContext.Provider>
    </main>
  );
};

export default Dashboard;
