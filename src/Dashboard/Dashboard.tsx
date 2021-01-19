import React, { useState, useEffect } from 'react';
import {
  Grid,
  makeStyles,
  InputBase,
  fade,
  CircularProgress,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { blue } from '@material-ui/core/colors';
import RecipeCard, { RecipeCardProps } from './RecipeCard';
import { recipesMock } from './recipesMock';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(blue[50], 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: `${theme.spacing(2)}px 0`,
    width: '100%',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    border: '1px solid',
    borderRadius: 5,
  },
  row: {
    padding: 10,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [search, setSearchString] = useState('');
  const [recipes, setRecipes] = useState([] as RecipeCardProps[]);
  const recipesFiltered: RecipeCardProps[] = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setRecipes(recipesMock);
  }, []);

  if (recipes.length === 0) {
    return <CircularProgress />;
  }
  return (
    <Grid container>
      <Grid item xs={12} className={classes.row}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            onChange={(e) => setSearchString(e.target.value)}
            placeholder='Search…'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Grid>

      {recipesFiltered.map((recipe) => (
        <Grid
          item
          xs={12}
          sm={4}
          lg={3}
          key={recipe.id}
          className={classes.row}
        >
          <RecipeCard {...recipe} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
