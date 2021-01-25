import React, { useState, useEffect } from 'react';
import {
  Grid,
  makeStyles,
  InputBase,
  fade,
  CircularProgress,
  Container,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { blue } from '@material-ui/core/colors';
import RecipeCard from './RecipeCard';
import { fetchContentData, IRecipeFields } from '../contentful/fetchData';

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
  row: { padding: 10 },
  categoriesList: {
    padding: 10,
    background: '#3f51b5',
    margin: 0,
    '& li': {
      margin: 0,
      borderBottom: '1px solid #3f61b6',
      minHeight: 50,
      display: 'flex',
      padding: '0 18px',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [search, setSearchString] = useState('');
  const [recipes, setRecipes] = useState<IRecipeFields[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const recipesFiltered: IRecipeFields[] = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

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
    <Container>
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
        <Grid container spacing={2}>
          {recipesFiltered.map((recipe) => (
            <Grid item xs={4} key={recipe.id}>
              <RecipeCard {...recipe} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
