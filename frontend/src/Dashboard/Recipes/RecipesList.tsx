import { useContext, useEffect } from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RecipeCard from './RecipeCard';
import { RecipesContext } from './RecipesProvider';
import { IRecipeFields } from '../../utils/contentful/types';
import { LanguageContext } from '../../Language/LanguageProvider';
import { FiltersContext } from '../Filters/FiltersProvider';
import FiltersContainer from '../Filters/FiltersContainer';

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
  const { recipes, fetchRecipes, search, hasError } = useContext(RecipesContext);
  const { filter } = useContext(FiltersContext);
  const { userLocale, localizedContent } = useContext(LanguageContext);
  const classes = useStyles();

  useEffect(() => {
    fetchRecipes(userLocale);
  }, [fetchRecipes, userLocale]);

  if (hasError) {
    return <Typography component='h1' align='center'>{localizedContent.recipesError}</Typography>
  }
  let recipesFiltered: IRecipeFields[] = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );
  if (filter !== '') {
    recipesFiltered = recipesFiltered.filter(
      (recipe) => filter === recipe.dietType.toLowerCase()
    );
  }

  return (
    <Container className={classes.container}>
      <Typography
        className={classes.title}
        component='h1'
        align='center'
        gutterBottom
      >
        <span>{localizedContent.recipes}</span>
      </Typography>
      <FiltersContainer />
      <Container>
        <Grid container spacing={2}>
          {recipesFiltered.map((recipe) => (
            <Grid item md={4} sm={6} xs={12} key={recipe.slug}>
              <RecipeCard {...recipe} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default RecipesList;
