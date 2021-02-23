import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  info: {
    [theme.breakpoints.up('sm')]: {
      padding: '5px 0px',
    },
  },
}));

const ListItemIcon = ({ label, value }: { label: string; value: number }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.info} variant='body1' color='textSecondary'>
      {label}: {value}
    </Typography>
  );
};

export default ListItemIcon;
