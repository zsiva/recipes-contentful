import React, { useContext, useEffect } from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RecipeCard from './RecipeCard';
import { RecipesContext } from './RecipesProvider';
import { IRecipeFields } from '../../utils/contentful/fetchData';
import { LanguageContext } from '../../Language/LanguageProvider';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '40px 0',
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: '2em',
    marginBottom: 40,
    textTransform: 'uppercase',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5em',
    },
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    lineHeight: '0.1em',
    '& span': {
      background: '#fff',
      padding: '0 10px',
    },
  },
}));

const RecipesList = () => {
  const { recipes, fetchRecipes, search } = useContext(RecipesContext);
  const { userLocale, localizedContent } = useContext(LanguageContext);
  const classes = useStyles();

  useEffect(() => {
    fetchRecipes(userLocale);
  }, [fetchRecipes, userLocale]);

  const recipesFiltered: IRecipeFields[] = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={classes.container}>
      <Typography
        className={classes.title}
        component='h1'
        align='center'
        gutterBottom
      >
        <span>{localizedContent.recipes}</span>
      </Typography>
      <Container>
        <Grid container spacing={2}>
          {recipesFiltered.map((recipe) => (
            <Grid item sm={4} xs={6} key={recipe.id}>
              <RecipeCard {...recipe} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default RecipesList;
