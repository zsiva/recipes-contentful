import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem, FormControl } from '@material-ui/core';
import { FiltersContext } from './FiltersProvider';
import { LanguageContext } from '../../Language/LanguageProvider';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));

export interface FiltersType {
  label: string;
  color: string;
  icon: JSX.Element;
  iconName?: string;
}

export default function FiltersSelect({
  filterTypes,
}: {
  filterTypes: FiltersType[];
}) {
  const { toggleFilters, filter } = useContext(FiltersContext);
  const { localizedContent } = useContext(LanguageContext);
  const classes = useStyles();

  return (
    <FormControl variant='outlined' className={classes.formControl}>
      <Select
        value={filter}
        onChange={(event: React.ChangeEvent<{ value: unknown }>) =>
          toggleFilters(event.target.value as string)
        }
      >
        <MenuItem value=''>None</MenuItem>
        {filterTypes.map((filterType) => (
          <MenuItem key={filterType.label} value={filterType.label}>
            {localizedContent[filterType.label]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
