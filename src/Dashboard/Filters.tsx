import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Chip, Grid, Container } from '@material-ui/core';
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
  filtersContainer: { paddingTop: 50, paddingBottom: 15 },
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
  label: { lineHeight: '2rem', marginLeft: 20, fontWeight: 'bold' },
}));

export default function Filters() {
  const { toggleFilters, filters } = useContext(RecipesContext);
  const { localizedContent } = useContext(LanguageContext);
  const classes = useStyles();

  return (
    <Container className={classes.filtersContainer}>
      <Typography
        className={classes.title}
        component='h1'
        align='center'
        gutterBottom
      >
        <span>{localizedContent.filters}</span>
      </Typography>
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <div className={classes.filters}>
            <Typography className={classes.label}>
              {localizedContent.foodType}
            </Typography>
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
          </div>
        </Grid>
        <Grid item sm={6} xs={12}>
          <div className={classes.filters}>
            <Typography className={classes.label}>
              {localizedContent.category}
            </Typography>
            <Chip
              label={localizedContent.breakfast}
              color={filters.includes('breakfast') ? 'secondary' : 'default'}
              disabled
            />
            <Chip
              label={localizedContent.lunch}
              color={filters.includes('lunch') ? 'secondary' : 'default'}
              disabled
            />
            <Chip
              label={localizedContent.drinks}
              color={filters.includes('drinks') ? 'secondary' : 'default'}
              disabled
            />
            <Chip
              label={localizedContent.dessert}
              color={filters.includes('dessert') ? 'secondary' : 'default'}
              disabled
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
