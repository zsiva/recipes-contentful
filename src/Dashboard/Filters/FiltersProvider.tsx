import { createContext } from 'react';

export type FiltersContextData = {
  toggleFilters: (item: string) => void;
  filter: string;
};

export const filtersDefaultValue: FiltersContextData = {
  toggleFilters: () => null,
  filter: '',
};

export const FiltersContext = createContext<FiltersContextData>(
  filtersDefaultValue
);
