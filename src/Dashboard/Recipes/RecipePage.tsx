import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useHistory, useParams } from 'react-router-dom';
import { LanguageContext } from '../../Language/LanguageProvider';
import { RecipesContext } from './RecipesProvider';
import ListItemIcon from '../../shared/ListItemIcon';
import DividerBlue from '../../shared/DividerBlue';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: '20px 0 30px',
    [theme.breakpoints.down('xs')]: { display: 'none' },
  },
  titleMob: {
    [theme.breakpoints.up('sm')]: { display: 'none' },
    [theme.breakpoints.down('xs')]: { textAlign: 'center', padding: 10 },
  },
  headerImg: {
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]: { height: 250 },
  },
  chip: { margin: 5 },
  flexContainer: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: { flexDirection: 'column' },
  },
  upperContent: {
    [theme.breakpoints.up('sm')]: { marginLeft: 30 },
  },
  notFoundContainer: { paddingTop: 30, textAlign: 'center' },
  backButton: { marginTop: 20 },
  container: { padding: 24 },
}));

interface RecipeRouteParams {
  slug: string;
}

export default function RecipePage() {
  const classes = useStyles();
  const { localizedContent } = useContext(LanguageContext);
  const { recipes } = useContext(RecipesContext);
  const { slug } = useParams<RecipeRouteParams>();
  const history = useHistory();
  const selectedRecipe = recipes.find((rec) => rec.slug === slug);

  if (!selectedRecipe) {
    return (
      <main className={classes.notFoundContainer}>
        <Typography variant='h6'>{localizedContent.notFound}</Typography>
        <Button
          className={classes.backButton}
          color='primary'
          variant='contained'
          onClick={() => history.push('/')}
        >
          <Typography>{localizedContent.goToDashboard}</Typography>
        </Button>
      </main>
    );
  }

  return (
    <main className={classes.container}>
      <Typography variant='h5' className={classes.titleMob}>
        {selectedRecipe.name}
      </Typography>
      <div className={classes.flexContainer}>
        <img
          src={selectedRecipe.headerImage}
          alt={selectedRecipe.name}
          className={classes.headerImg}
        />
        <div className={classes.upperContent}>
          <ListItemIcon
            label={localizedContent.prepTime}
            value={selectedRecipe.preparationTime}
          />
          <ListItemIcon
            label={localizedContent.cookTime}
            value={selectedRecipe.cookTime}
          />
          {selectedRecipe.servings && (
            <ListItemIcon
              label={localizedContent.servings}
              value={selectedRecipe.servings}
            />
          )}
          <DividerBlue />
          <Chip
            className={classes.chip}
            size='small'
            label={localizedContent[selectedRecipe.dietType]}
            color='primary'
          />
          <Chip
            className={classes.chip}
            size='small'
            label={localizedContent[selectedRecipe.mealType]}
            color='secondary'
          />
        </div>
      </div>
      <Typography variant='h4' className={classes.title}>
        {selectedRecipe.name}
      </Typography>
      <DividerBlue />
      <Typography variant='h6' color='textSecondary'>
        {localizedContent.ingredients}
      </Typography>
      {documentToReactComponents(selectedRecipe.ingredients)}
      <DividerBlue />
      <Typography variant='h6' color='textSecondary'>
        {localizedContent.steps}
      </Typography>
      {documentToReactComponents(selectedRecipe.steps)}
    </main>
  );
}
