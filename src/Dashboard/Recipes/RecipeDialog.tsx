import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { green } from '@material-ui/core/colors';
import DialogContent from '@material-ui/core/DialogContent';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { IRecipeFields } from '../../utils/contentful/fetchData';
import { LanguageContext } from '../../Language/LanguageProvider';

type RecipeDialogProps = IRecipeFields & {
  handleClose: () => void;
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
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
  chip: { margin: 5, backgroundColor: green[500] },
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
}));

export default function RecipeDialog({
  handleClose,
  name,
  ingredients,
  headerImage,
  steps,
  categories,
  cookTime,
  preparationTime,
  foodType,
  servings,
}: RecipeDialogProps) {
  const classes = useStyles();
  const { localizedContent } = useContext(LanguageContext);

  return (
    <Dialog open fullWidth maxWidth='md' onClose={handleClose}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            onClick={handleClose}
            aria-label='close'
          >
            <CloseIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
      <DialogContent>
        <Typography variant='h6' className={classes.titleMob}>
          {name}
        </Typography>
        <div className={classes.flexContainer}>
          <img src={headerImage} alt={name} className={classes.headerImg} />
          <div className={classes.upperContent}>
            <ul className={classes.info}>
              <li>
                <strong>Cuisine:</strong> Spanish
              </li>
              <li>
                <strong>Course: </strong> {foodType}
              </li>
              <li>
                <strong>Level:</strong> Advanced
              </li>
            </ul>
            <Divider className={classes.divider} />
            <Typography
              className={classes.info}
              variant='body2'
              color='textSecondary'
            >
              {localizedContent.prepTime}: {preparationTime}
            </Typography>
            <Typography
              className={classes.info}
              variant='body2'
              color='textSecondary'
            >
              {localizedContent.cookTime}: {cookTime}
            </Typography>
            <Typography
              className={classes.info}
              variant='body2'
              color='textSecondary'
            >
              {localizedContent.servings}: {servings}
            </Typography>
            <Divider className={classes.divider} />
            <Chip
              className={classes.chip}
              size='small'
              label={categories}
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
          Ingredients
        </Typography>
        {documentToReactComponents(ingredients)}
        <Divider className={classes.divider} />
        <Typography
          className={classes.info}
          variant='body1'
          color='textSecondary'
        >
          Steps
        </Typography>
        {documentToReactComponents(steps)}
      </DialogContent>
    </Dialog>
  );
}
