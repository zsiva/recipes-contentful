import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Chip } from '@material-ui/core';
import { RecipesContext } from './Recipes/RecipesProvider';
import { LanguageContext } from '../Language/LanguageProvider';

const useStyles = makeStyles((theme) => ({
  filters: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  filtersContainer: { padding: '50px 0px 15px' },
  title: {
    color: theme.palette.primary.main,
    fontSize: '2em',
    marginBottom: 40,
    textTransform: 'uppercase',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5em',
    },
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    lineHeight: '0.1em',
    '& span': {
      background: '#fff',
      padding: '0 10px',
    },
  },
}));

export default function Filters() {
  const { toggleFilters, filters } = useContext(RecipesContext);
  const { localizedContent } = useContext(LanguageContext);
  const classes = useStyles();

  return (
    <div className={classes.filtersContainer}>
      <Typography
        className={classes.title}
        component='h1'
        align='center'
        gutterBottom
      >
        <span>{localizedContent.filters}</span>
      </Typography>
      <div className={classes.filters}>
        <Chip
          label={localizedContent.vegetarian}
          color={filters.includes('vegetarian') ? 'primary' : 'default'}
          onClick={() => toggleFilters('vegetarian')}
        />
        <Chip
          label={localizedContent.vegan}
          color={filters.includes('vegan') ? 'primary' : 'default'}
          onClick={() => toggleFilters('vegan')}
        />
        <Chip
          label={localizedContent.breakfast}
          color={filters.includes('breakfast') ? 'secondary' : 'default'}
        />
        <Chip
          label={localizedContent.lunch}
          color={filters.includes('lunch') ? 'secondary' : 'default'}
        />
      </div>
    </div>
  );
}
