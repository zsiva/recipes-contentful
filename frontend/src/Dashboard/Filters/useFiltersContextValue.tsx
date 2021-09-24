import { useState, useCallback, useMemo } from 'react';
import { FiltersContextData } from './FiltersProvider';

export const useFiltersContextValue = (): FiltersContextData => {
  const [filter, setFilters] = useState<string>('');
  console.log(filter)
  const toggleFilters = useCallback(
    (filterLabel: string) => {
      setFilters(filterLabel);
    },
    [setFilters]
  );

  return useMemo(
    () => ({
      toggleFilters,
      filter,
    }),
    [toggleFilters, filter]
  );
};
