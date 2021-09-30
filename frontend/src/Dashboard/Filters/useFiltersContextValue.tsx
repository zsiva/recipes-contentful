import { useState, useCallback, useMemo } from 'react';
import { FiltersContextData } from './FiltersProvider';

export const useFiltersContextValue = (): FiltersContextData => {
  const [filter, setFilters] = useState<string>('');

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
