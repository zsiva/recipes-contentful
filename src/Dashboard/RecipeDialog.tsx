import React from 'react';
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
import { IRecipeFields } from '../contentful/fetchData';

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
  },
  headerImg: { maxWidth: '100%', height: 200 },
  chip: { margin: 5, backgroundColor: green[500] },
  list: { margin: 10, paddingLeft: 20 },
  info: { padding: '0px 15px' },
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
}: RecipeDialogProps) {
  const classes = useStyles();

  return (
    <Dialog open maxWidth='lg' onClose={handleClose}>
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
        <div className={classes.flexContainer}>
          <img src={headerImage} alt={name} className={classes.headerImg} />
          <div className={classes.upperContent}>
            <Typography className={classes.info} variant='body1'>
              <strong>Cuisine:</strong> Spanish <strong>Course:</strong> Lunch{' '}
              <strong>Level:</strong> : Advanced
            </Typography>
            <Divider className={classes.divider} />
            <Typography
              className={classes.info}
              variant='body2'
              color='textSecondary'
            >
              Preparation time: {preparationTime}
            </Typography>
            <Typography
              className={classes.info}
              variant='body2'
              color='textSecondary'
            >
              Cooking time: {cookTime}
            </Typography>
            <Typography
              className={classes.info}
              variant='body2'
              color='textSecondary'
            >
              Servings: 5
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
        {documentToReactComponents(ingredients)}
        <Divider className={classes.divider} />
        {documentToReactComponents(steps)}
      </DialogContent>
    </Dialog>
  );
}
