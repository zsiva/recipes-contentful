import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AuthenticatedDrawer from './AuthenticatedDrawer';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuBar() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  //TODO handle authentication
  const authenticated = false;
  return (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar>
          {openDrawer && (
            <AuthenticatedDrawer handleClose={() => setOpenDrawer(false)} />
          )}
          {authenticated && (
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='open drawer'
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Button color='inherit' component={Link} to='/dashboard'>
            <Typography variant='h6' noWrap>
              Recipes
            </Typography>
          </Button>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
