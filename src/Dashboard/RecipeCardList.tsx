import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import RecipeDialog from './RecipeDialog';
import { IRecipeFields } from '../contentful/fetchData';

const useStyles = makeStyles((theme) => ({
  card: { display: 'flex', marginBottom: 20 },
  details: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #e4d9d1',
    margin: 10,
    padding: '20px 25px',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '40%',
    backgroundSize: 'contain',
    '&:hover': {
      opacity: '0.5',
      cursor: 'pointer',
    },
  },
  list: { overflow: 'hidden', maxHeight: 100 },
  rightButton: {
    float: 'right',
    [theme.breakpoints.only('sm')]: {
      float: 'none',
    },
  },
  title: {
    fontWeight: 900,
    textTransform: 'uppercase',
  },
}));

export type IRecipeCardListProps = IRecipeFields;

export default function RecipeCardList(props: IRecipeCardListProps) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const splittedIngredients: string[] = props.ingredients.split(',');
  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={props.headerImage}
          title={props.name}
          onClick={() => setOpen(true)}
        />

        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component='h5' variant='h6' className={classes.title}>
              {props.name}
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              {props.description}
            </Typography>
          </CardContent>
          <div>
            <ul className={classes.list}>
              {splittedIngredients.map((ingredient: string, idx: number) => (
                <li key={idx}>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    {ingredient}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
      {open && <RecipeDialog {...props} handleClose={() => setOpen(false)} />}
    </>
  );
}
