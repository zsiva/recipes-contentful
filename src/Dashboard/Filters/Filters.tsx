import React from 'react';
import { Grid } from '@material-ui/core';
import FiltersDietType from './FiltersDietType';
import FiltersCategory from './FiltersCategory';

export default function Filters() {
  return (
    <Grid container>
      <Grid item sm={6} xs={12}>
        <FiltersDietType />
      </Grid>
      <Grid item sm={6} xs={12}>
        <FiltersCategory />
      </Grid>
    </Grid>
  );
}
