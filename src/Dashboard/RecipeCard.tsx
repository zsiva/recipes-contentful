import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { green } from '@material-ui/core/colors';
import Chip from '@material-ui/core/Chip';
import { Divider, Button } from '@material-ui/core';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { IRecipeFields } from '../contentful/fetchData';
import RecipeDialog from './RecipeDialog';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '50%',
    '&:hover': {
      opacity: '0.5',
      cursor: 'pointer',
    },
  },
  rightButton: {
    float: 'right',
    [theme.breakpoints.only('sm')]: {
      float: 'none',
    },
  },
  chip: { margin: 8, backgroundColor: green[500] },
  list: { overflow: 'hidden', maxHeight: 100 },
  header: { backgroundColor: theme.palette.primary.main, color: '#fff' },
  card: { position: 'relative' },
}));

export default function RecipeCard(props: IRecipeFields) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Card className={classes.card}>
        <CardHeader title={props.name} className={classes.header} />
        <CardMedia
          className={classes.media}
          image={props.headerImage}
          title={props.name}
          onClick={() => setOpen(true)}
        />
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
        <Divider />
        {documentToReactComponents(props.ingredients)}
      </Card>
      {open && <RecipeDialog {...props} handleClose={() => setOpen(false)} />}
    </>
  );
}
