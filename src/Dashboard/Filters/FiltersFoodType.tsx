import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import { Eco, HighlightOff } from '@material-ui/icons';
import { FiltersContext } from './FiltersProvider';
import { LanguageContext } from '../../Language/LanguageProvider';

const foodType = [
  { label: 'vegan', icon: <Eco /> },
  { label: 'vegetarian', icon: <Eco /> },
];

const useStyles = makeStyles((theme) => ({
  filters: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
  },
  label: {
    lineHeight: '3rem',
    marginRight: 10,
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

export default function FiltersFoodType() {
  const { toggleFilters, filter } = useContext(FiltersContext);
  const { localizedContent } = useContext(LanguageContext);
  const classes = useStyles();

  return (
    <div className={classes.filters}>
      <Typography className={classes.label}>
        {localizedContent.foodType}
      </Typography>
      <RadioGroup
        row
        aria-label='food-type-filter'
        name='food-type-filter'
        value={filter}
      >
        {foodType.map((food) => (
          <FormControlLabel
            key={food.label}
            value={food.label}
            control={
              <Radio
                checked={filter === food.label}
                color='primary'
                icon={food.icon}
                onChange={() => toggleFilters(food.label)}
              />
            }
            label={localizedContent[food.label]}
          />
        ))}
        <FormControlLabel
          control={
            <Radio
              color='primary'
              icon={<HighlightOff />}
              onChange={() => toggleFilters('')}
            />
          }
          label={localizedContent.clear}
        />
      </RadioGroup>
    </div>
  );
}
