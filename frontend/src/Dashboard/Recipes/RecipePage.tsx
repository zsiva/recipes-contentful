import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useHistory, useParams } from 'react-router-dom';
import { LanguageContext } from '../../Language/LanguageProvider';
import { RecipesContext } from './RecipesProvider';
import ListItemIcon from '../../shared/ListItemIcon';
import DividerBlue from '../../shared/DividerBlue';
import { mealTypes, dietTypes } from './../../utils/chipTypes';

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
    [theme.breakpoints.up('sm')]: { height: 250, marginRight: 30 },
  },
  chip: { marginRight: 15 },
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: { flexDirection: 'column' },
  },
  upperContent: {
    [theme.breakpoints.up('sm')]: { marginLeft: 30 },
  },
  notFoundContainer: { paddingTop: 30, textAlign: 'center' },
  container: { paddingTop: 40 },
  backButton: { marginTop: 20, marginLeft: 'auto', height: 30 },
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
      <Container className={classes.notFoundContainer}>
        <Typography variant='h6'>{localizedContent.notFound}</Typography>
        <Button
          className={classes.backButton}
          color='primary'
          variant='contained'
          onClick={() => history.push('/')}
        >
          <Typography>{localizedContent.goToDashboard}</Typography>
        </Button>
      </Container>
    );
  }

  const mealType = mealTypes.find(
    (meal) => meal.label === selectedRecipe.mealType
  );

  const dietType = dietTypes.find(
    (diet) => diet.label === selectedRecipe.dietType
  );

  return (
    <Container className={classes.container}>
      <Typography variant='h5' className={classes.titleMob}>
        {selectedRecipe.name}
      </Typography>
      <div className={classes.flexContainer}>
        <div>
          <img
            src={selectedRecipe.headerImage}
            alt={selectedRecipe.name}
            className={classes.headerImg}
          />
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
        </div>

        <div>
          <Typography variant='h6' color='textSecondary'>
            {localizedContent.ingredients}
          </Typography>
          {documentToReactComponents(selectedRecipe.ingredients)}
          <DividerBlue />
          <Chip
            className={classes.chip}
            label={localizedContent[selectedRecipe.dietType]}
            color='primary'
            style={{ backgroundColor: dietType?.color}}
            icon={dietType?.icon}
          />
          {mealType && (
            <Chip
              className={classes.chip}
              label={localizedContent[mealType.label]}
              color='primary'
              icon={mealType.icon}
            />
          )}
        </div>
        <Button
          className={classes.backButton}
          color='primary'
          variant='contained'
          onClick={() => history.push('/')}
        >
          <Typography>{localizedContent.goToDashboard}</Typography>
        </Button>
      </div>
      <DividerBlue />
      <Typography variant='h4' className={classes.title}>
        {selectedRecipe.name}
      </Typography>
      <DividerBlue />
      <Typography variant='h6' color='textSecondary'>
        {localizedContent.steps}
      </Typography>
      {documentToReactComponents(selectedRecipe.steps)}
    </Container>
  );
}
