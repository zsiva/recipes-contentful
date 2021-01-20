import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function MenuBar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Button color='inherit' component={Link} to='/dashboard'>
          <Typography variant='h6' noWrap>
            Recipes
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
