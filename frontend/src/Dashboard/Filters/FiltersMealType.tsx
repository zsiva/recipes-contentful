import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Chip } from '@material-ui/core';
import {
  Cake,
  Fastfood,
  LocalBar,
  FreeBreakfast,
  OutdoorGrill,
} from '@material-ui/icons';
import { FiltersContext } from './FiltersProvider';
import { LanguageContext } from '../../Language/LanguageProvider';

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
  { label: 'breakfast', icon: <FreeBreakfast /> },
  { label: 'lunch', icon: <Fastfood /> },
  { label: 'dinner', icon: <OutdoorGrill /> },
  { label: 'dessert', icon: <Cake /> },
  { label: 'drinks', icon: <LocalBar /> },
];

export default function FiltersMealType() {
  const { filter } = useContext(FiltersContext);
  const { localizedContent } = useContext(LanguageContext);
  const classes = useStyles();

  return (
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
  );
}
