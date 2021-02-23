import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useHistory, useParams } from 'react-router-dom';
import { LanguageContext } from '../../Language/LanguageProvider';
import { RecipesContext } from './RecipesProvider';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    [theme.breakpoints.down('xs')]: { display: 'none' },
  },
  titleMob: {
    [theme.breakpoints.up('sm')]: { display: 'none' },
    [theme.breakpoints.down('xs')]: { textAlign: 'center', padding: 10 },
  },

  headerImg: {
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]: { height: 200 },
  },
  chip: { margin: 5 },
  list: { margin: 10, paddingLeft: 20 },
  info: {
    [theme.breakpoints.up('sm')]: {
      padding: '0px 15px',
      '& li': { display: 'inline', paddingRight: 10 },
    },
  },
  divider: { margin: '10px 0' },
  flexContainer: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: { flexDirection: 'column' },
  },
  upperContent: { padding: 10 },
  notFoundContainer: { paddingTop: 30, textAlign: 'center' },
  backButton: { marginTop: 20 },
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
    <main>
      <Typography variant='h6' className={classes.titleMob}>
        {selectedRecipe.name}
      </Typography>
      <div className={classes.flexContainer}>
        <img
          src={selectedRecipe.headerImage}
          alt={selectedRecipe.name}
          className={classes.headerImg}
        />
        <div className={classes.upperContent}>
          <ul className={classes.info}>
            <li>
              <strong>{localizedContent.foodType}: </strong>{' '}
              {localizedContent[selectedRecipe.mealType]}
            </li>
          </ul>
          <Divider className={classes.divider} />
          <Typography
            className={classes.info}
            variant='body2'
            color='textSecondary'
          >
            {localizedContent.prepTime}: {selectedRecipe.preparationTime}
          </Typography>
          <Typography
            className={classes.info}
            variant='body2'
            color='textSecondary'
          >
            {localizedContent.cookTime}: {selectedRecipe.cookTime}
          </Typography>
          {selectedRecipe.servings && (
            <Typography
              className={classes.info}
              variant='body2'
              color='textSecondary'
            >
              {localizedContent.servings}: {selectedRecipe.servings}
            </Typography>
          )}
          <Divider className={classes.divider} />
          <Chip
            className={classes.chip}
            size='small'
            label={localizedContent[selectedRecipe.dietType]}
            color='primary'
          />
        </div>
      </div>

      <Divider className={classes.divider} />
      <Typography
        className={classes.info}
        variant='body1'
        color='textSecondary'
      >
        {localizedContent.ingredients}
      </Typography>
      {documentToReactComponents(selectedRecipe.ingredients)}
      <Divider className={classes.divider} />
      <Typography
        className={classes.info}
        variant='body1'
        color='textSecondary'
      >
        {localizedContent.steps}
      </Typography>
      {documentToReactComponents(selectedRecipe.steps)}
    </main>
  );
}
