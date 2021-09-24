import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { IRecipeFields } from '../../utils/contentful/types';
import { LanguageContext } from '../../Language/LanguageProvider';
import { dietTypes } from '../Filters/FiltersDietType';
import { mealTypes } from '../Filters/FiltersMealType';

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
    minHeight: 50,
    fontWeight: 'bold',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    textTransform: 'uppercase',
    '&:hover': {
      color: theme.palette.primary.main,
      cursor: 'pointer',
      transition: '0.3s ease-in-out',
    },
  },
  card: { position: 'relative', marginBottom: 30 },
}));

export default function RecipeCard(props: IRecipeFields) {
  const classes = useStyles();
  const { localizedContent } = useContext(LanguageContext);
  const history = useHistory();
  const currentDietType = dietTypes.find(
    (diet) => diet.label === props.dietType
  );

  const currentMealType = mealTypes.find(
    (meal) => meal.label === props.mealType
  );

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.headerImage}
          title={props.name}
          onClick={() => history.push(`/${props.slug}`)}
        />
        <Typography
          className={classes.title}
          onClick={() => history.push(`/${props.slug}`)}
        >
          {props.name}
        </Typography>
        <Chip
          className={classes.chip}
          size='small'
          label={localizedContent[props.dietType]}
          icon={currentDietType?.icon}
          color='primary'
          style={{ backgroundColor: currentDietType?.color }}
        />
        {props.mealType && (
          <div className={classes.rightButton}>
            <Chip
              className={classes.chip}
              size='small'
              label={localizedContent[props.mealType]}
              color='primary'
              icon={currentMealType?.icon}
            />
          </div>
        )}
      </Card>
    </>
  );
}
