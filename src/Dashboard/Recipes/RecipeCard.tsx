import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { green } from '@material-ui/core/colors';
import Chip from '@material-ui/core/Chip';
import { Button, Typography } from '@material-ui/core';
import { IRecipeFields } from '../../contentful/fetchData';
import RecipeDialog from './RecipeDialog';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '50%',
    '&:hover': {
      opacity: '0.5',
      cursor: 'pointer',
      transition: '0.3s ease-in-out',
    },
  },
  rightButton: {
    float: 'right',
    [theme.breakpoints.down('xs')]: {
      float: 'none',
    },
  },
  chip: { margin: 8, backgroundColor: green[500] },
  list: { overflow: 'hidden', maxHeight: 100 },
  title: {
    padding: 15,
    fontWeight: 'bold',
  },
  card: { position: 'relative' },
}));

export default function RecipeCard(props: IRecipeFields) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.headerImage}
          title={props.name}
          onClick={() => setOpen(true)}
        />
        <Typography className={classes.title}>{props.name}</Typography>
        <Chip
          className={classes.chip}
          size='small'
          label={props.categories}
          color='primary'
        />
        <div className={classes.rightButton}>
          <Button
            className={classes.rightButton}
            aria-label='edit recipe'
            onClick={() => setOpen(true)}
            color='primary'
          >
            View
          </Button>
        </div>
      </Card>
      {open && <RecipeDialog {...props} handleClose={() => setOpen(false)} />}
    </>
  );
}
