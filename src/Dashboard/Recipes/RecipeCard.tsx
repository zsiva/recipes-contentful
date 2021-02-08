import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import { Typography } from '@material-ui/core';
import { IRecipeFields } from '../../utils/contentful/fetchData';
import RecipeDialog from './RecipeDialog';
import { LanguageContext } from '../../Language/LanguageProvider';

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
  chip: { margin: 8 },
  list: { overflow: 'hidden', maxHeight: 100 },
  title: {
    padding: 15,
    fontWeight: 'bold',
    borderBottom: '1px solid #dedde3',
    textTransform: 'uppercase',
    '&:hover': {
      color: theme.palette.primary.main,
      cursor: 'pointer',
      transition: '0.3s ease-in-out',
    },
  },
  card: { position: 'relative' },
}));

export default function RecipeCard(props: IRecipeFields) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { localizedContent } = useContext(LanguageContext);

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.headerImage}
          title={props.name}
          onClick={() => setOpen(true)}
        />
        <Typography className={classes.title} onClick={() => setOpen(true)}>
          {props.name}
        </Typography>
        <Chip
          className={classes.chip}
          size='small'
          label={localizedContent[props.categories]}
          color='primary'
        />
        {props.foodType && (
          <div className={classes.rightButton}>
            <Chip
              className={classes.chip}
              size='small'
              label={props.foodType}
              color='secondary'
            />
          </div>
        )}
      </Card>
      {open && <RecipeDialog {...props} handleClose={() => setOpen(false)} />}
    </>
  );
}
