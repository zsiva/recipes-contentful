import React, { useContext } from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import FiltersDietType, { dietTypes } from './FiltersDietType';
import FiltersMealType, { mealTypes } from './FiltersMealType';
import { LanguageContext } from '../../Language/LanguageProvider';
import FiltersSelect from './FiltersSelect';

const useStyles = makeStyles((theme) => ({
  label: {
    lineHeight: '55px',
  },
}));

export default function Filters() {
  const { localizedContent } = useContext(LanguageContext);
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm={6} xs={12} alignContent='center'>
        <Typography className={classes.label} component='span'>
          {localizedContent.dietType}
        </Typography>
        <FiltersDietType />
      </Grid>
      <Grid item sm={6} xs={12}>
        <Typography className={classes.label} component='span'>
          {localizedContent.foodType}
        </Typography>
        <FiltersMealType />
      </Grid>
    </Grid>
  );
}
