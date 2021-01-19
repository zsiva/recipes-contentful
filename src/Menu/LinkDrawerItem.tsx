import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { DrawerItemProps } from './AuthenticatedDrawer';

export type LinkItemProps = DrawerItemProps & {
  onClick: () => void;
};

const useStyles = makeStyles(() => ({
  link: {
    color: 'rgba(0, 0, 0, 0.87)',
    textDecoration: 'none',
  },
}));

const LinkDrawerItem = ({ onClick, label, to, icon }: LinkItemProps) => {
  const classes = useStyles();
  return (
    <Link to={to} onClick={onClick} className={classes.link}>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItem>
    </Link>
  );
};
export default LinkDrawerItem;
