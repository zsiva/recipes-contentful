import React, { useContext, useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RecipeCard from './RecipeCard';
import { RecipesContext } from './RecipesProvider';
import { IRecipeFields } from '../../contentful/fetchData';
import { LanguageContext } from '../../Language/LanguageProvider';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#dedde3',
    padding: '40px 0',
  },
}));

const RecipesList = () => {
  const { recipes, fetchRecipes, search } = useContext(RecipesContext);
  const { userLocale } = useContext(LanguageContext);
  const classes = useStyles();

  useEffect(() => {
    fetchRecipes(userLocale);
  }, [fetchRecipes, userLocale]);

  const recipesFiltered: IRecipeFields[] = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={classes.container}>
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
