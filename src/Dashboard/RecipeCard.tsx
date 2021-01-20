import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import Chip from '@material-ui/core/Chip';
import RecipeDialog from './RecipeDialog';
import { Divider, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  media: { height: 0, paddingTop: '50%' },
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

export type RecipeCardProps = {
  id: string;
  name: string;
  ingredients: string;
  categories: string[];
  cookTime: number;
  preparationTime: number;
  servings: number;
  rating: number;
  author: string;
  headerImage: string;
  steps: string;
  description: string;
};

export default function RecipeCard(props: RecipeCardProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const splittedIngredients = props.ingredients.split(',');
  return (
    <>
      <Card className={classes.card}>
        <CardHeader title={props.name} className={classes.header} />
        <CardMedia
          className={classes.media}
          image={props.headerImage}
          title={props.name}
        />

        {props.categories.map((category: string, idx: number) => (
          <Chip
            key={idx}
            className={classes.chip}
            size='small'
            label={category}
            color='primary'
          />
        ))}
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
        <ul className={classes.list}>
          {splittedIngredients.map((ingredient: string, idx: number) => (
            <li key={idx}>
              <Typography variant='body2' color='textSecondary' component='p'>
                {ingredient}
              </Typography>
            </li>
          ))}
        </ul>
      </Card>
      {open && <RecipeDialog {...props} handleClose={() => setOpen(false)} />}
    </>
  );
}
