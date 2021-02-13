import React from 'react';
import { Grid } from '@material-ui/core';
import FiltersFoodType from './FiltersFoodType';
import FiltersCategory from './FiltersCategory';

export default function Filters() {
  return (
    <Grid container>
      <Grid item md={6} xs={12}>
        <FiltersFoodType />
      </Grid>
      <Grid item md={6} xs={12}>
        <FiltersCategory />
      </Grid>
    </Grid>
  );
}
