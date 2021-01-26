import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RecipeCard from './RecipeCard';
import { fetchContentData, IRecipeFields } from '../contentful/fetchData';
import Banner from './Banner';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#dedde3',
    padding: '40px 0',
  },
}));

const Dashboard = () => {
  const [recipes, setRecipes] = useState<IRecipeFields[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchContentData('en-US');
      setRecipes(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <main>
      <Banner />
      <div className={classes.container}>
        <Container>
          <Grid container spacing={2}>
            {recipes.map((recipe) => (
              <Grid item sm={4} xs={6} key={recipe.id}>
                <RecipeCard {...recipe} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </main>
  );
};

export default Dashboard;
