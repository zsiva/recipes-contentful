import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';
import { Eco, HighlightOff } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';
import { FiltersContext } from './FiltersProvider';
import { LanguageContext } from '../../Language/LanguageProvider';

export const dietTypes = [
  { label: 'vegan', icon: <Eco />, color: green[400] },
  { label: 'vegetarian', icon: <Eco />, color: green[600] },
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
  },
}));

export default function FiltersDietType() {
  const { toggleFilters, filter } = useContext(FiltersContext);
  const { localizedContent } = useContext(LanguageContext);
  const classes = useStyles();

  return (
    <div className={classes.filters}>
      <Typography className={classes.label}>
        {localizedContent.dietType}
      </Typography>
      <RadioGroup
        row
        aria-label='food-diet-filter'
        name='food-diet-filter'
        value={filter}
      >
        {dietTypes.map((diet) => (
          <FormControlLabel
            key={diet.label}
            value={diet.label}
            control={
              <Radio
                checked={filter === diet.label}
                color='primary'
                icon={diet.icon}
                onChange={() => toggleFilters(diet.label)}
              />
            }
            label={localizedContent[diet.label]}
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
