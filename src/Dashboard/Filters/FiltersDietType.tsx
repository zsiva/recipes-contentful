import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem, FormControl } from '@material-ui/core';
import { Eco, HighlightOff } from '@material-ui/icons';
import { green, grey } from '@material-ui/core/colors';
import { FiltersContext } from './FiltersProvider';
import { LanguageContext } from '../../Language/LanguageProvider';
import FilterCard from './FilterCard';

export const dietTypes = [
  { label: 'vegan', icon: <Eco />, color: green[300] },
  { label: 'vegetarian', icon: <Eco />, color: green[400] },
  { label: 'clear', icon: <HighlightOff />, color: grey[500] },
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  filterCards: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {},
  },
}));

export default function FiltersDietType() {
  const { toggleFilters, filter } = useContext(FiltersContext);
  const { localizedContent } = useContext(LanguageContext);
  const classes = useStyles();

  return (
    <>
      <div className={classes.filterCards}>
        {dietTypes.map((diet) => (
          <FilterCard
            key={diet.label}
            {...diet}
            label={localizedContent[diet.label] as string}
          />
        ))}
      </div>
      <FormControl variant='outlined' className={classes.formControl}>
        <Select
          value={filter}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) =>
            toggleFilters(event.target.value as string)
          }
        >
          <MenuItem value=''>None</MenuItem>
          {dietTypes.map((diet) => (
            <MenuItem key={diet.label} value={diet.label}>
              {localizedContent[diet.label]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
