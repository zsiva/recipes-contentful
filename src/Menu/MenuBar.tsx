import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Button, Container, makeStyles } from '@material-ui/core';
import LanguageSelector from '../Language/LanguageSelector';
import { LanguageContext } from '../Language/LanguageProvider';

const useStyles = makeStyles((theme) => ({
  bar: {
    padding: 10,
  },
  buttonRight: {
    float: 'right',
  },
}));

export default function MenuBar() {
  const { localizedContent } = useContext(LanguageContext);
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.bar}>
      <Container>
        <Button color='inherit'>
          <Typography variant='h6' noWrap>
            {localizedContent.recipes}
          </Typography>
        </Button>
        <div className={classes.buttonRight}>
          <LanguageSelector />
        </div>
      </Container>
    </AppBar>
  );
}
