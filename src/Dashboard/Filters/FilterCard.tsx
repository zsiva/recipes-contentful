import React from 'react';
import { Typography, makeStyles, Card, Icon } from '@material-ui/core';
import { FiltersType } from './FiltersSelect';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 100,
    textAlign: 'center',
    padding: '5px 0',
    margin: 5,
    float: 'left',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: (props: { color: string }) => props.color,
    '&:hover': {
      color: 'white',
      cursor: 'pointer',
      backgroundColor: (props: { color: string }) => props.color,
    },
  },
}));

export default function FilterCard({
  label,
  icon,
  color,
  iconName,
}: FiltersType) {
  const classes = useStyles({ color });

  return (
    <>
      <Card className={classes.card}>
        <Typography>{label}</Typography>
        {icon}
        <Icon />
        <Icon>{iconName}</Icon>
      </Card>
    </>
  );
}
