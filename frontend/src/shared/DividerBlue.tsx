import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: '20px 0',
    position: 'relative',
    height: 1,
    padding: 0,
    background: theme.palette.grey[300],
    border: 'none',
    '&:before': {
      content: `''`,
      position: 'absolute',
      top: 0,
      left: 0,
      height: 2,
      width: 100,
      background: theme.palette.primary.main,
    },
  },
}));

export default function DividerBlue() {
  const classes = useStyles();
  return <div className={classes.divider} />;
}
