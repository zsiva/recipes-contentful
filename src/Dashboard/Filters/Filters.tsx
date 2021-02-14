import React from 'react';
import { Grid } from '@material-ui/core';
import FiltersDietType from './FiltersDietType';
import FiltersMealType from './FiltersMealType';

export default function Filters() {
  return (
    <Grid container>
      <Grid item sm={6} xs={12}>
        <FiltersDietType />
      </Grid>
      <Grid item sm={6} xs={12}>
        <FiltersMealType />
      </Grid>
    </Grid>
  );
}
