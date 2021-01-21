import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Button, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bar: {
    padding: 10,
  },
  buttonRight: {
    float: 'right',
  },
}));

export default function MenuBar() {
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.bar}>
      <Container>
        <Button color='inherit'>
          <Typography variant='h6' noWrap>
            Recipes
          </Typography>
        </Button>
        <Button color='inherit' className={classes.buttonRight}>
          Create menu
        </Button>
      </Container>
    </AppBar>
  );
}
