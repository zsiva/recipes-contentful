import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';
import { LanguageContext } from '../../Language/LanguageProvider';
import FiltersDietType from './FiltersDietType';
import FiltersMealType from './FiltersMealType';

const useStyles = makeStyles((theme) => ({
  filtersContainer: {
    paddingTop: 50, paddingBottom: 15,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
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

export default function FiltersContainer() {
  const { localizedContent } = useContext(LanguageContext);
  const classes = useStyles();

  return (
    <Container className={classes.filtersContainer}>
      <Typography
        className={classes.title}
        component='h1'
        align='center'
        gutterBottom
      >
        <span>{localizedContent.filters}</span>
      </Typography>
      <FiltersDietType />
      <FiltersMealType />
    </Container>
  );
}
