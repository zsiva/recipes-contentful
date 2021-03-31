import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Chip, Select, MenuItem } from '@material-ui/core';
import {
  Cake,
  Fastfood,
  LocalBar,
  FreeBreakfast,
  OutdoorGrill,
} from '@material-ui/icons';
import { blue } from '@material-ui/core/colors';
import { FiltersContext } from './FiltersProvider';
import { LanguageContext } from '../../Language/LanguageProvider';
import FilterCard from './FilterCard';

const useStyles = makeStyles((theme) => ({
  filters: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  },
  label: { lineHeight: '2rem', marginLeft: 20, fontWeight: 'bold' },
}));

export const mealTypes = [
  { label: 'breakfast', icon: <FreeBreakfast />, color: blue[200] },
  { label: 'lunch', icon: <Fastfood />, color: blue[300] },
  { label: 'dinner', icon: <OutdoorGrill />, color: blue[400] },
  { label: 'dessert', icon: <Cake />, color: blue[500] },
  { label: 'drinks', icon: <LocalBar />, color: blue[600] },
];

export default function FiltersMealType() {
  const { filter, toggleFilters } = useContext(FiltersContext);
  const { localizedContent } = useContext(LanguageContext);
  const classes = useStyles();

  return (
    <>
      {mealTypes.map((diet) => (
        <FilterCard
          key={diet.label}
          {...diet}
          label={localizedContent[diet.label] as string}
        />
      ))}
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={filter}
        onChange={(event: React.ChangeEvent<{ value: unknown }>) =>
          toggleFilters(event.target.value as string)
        }
      >
        {mealTypes.map((meal) => (
          <MenuItem key={meal.label}>{localizedContent[meal.label]}</MenuItem>
        ))}
      </Select>
      <div className={classes.filters}>
        <Typography className={classes.label}>
          {localizedContent.mealType}
        </Typography>
        {mealTypes.map((meal) => (
          <Chip
            key={meal.label}
            label={localizedContent[meal.label]}
            color={filter === meal.label ? 'secondary' : 'default'}
            disabled
            icon={meal.icon}
          />
        ))}
      </div>
    </>
  );
}
