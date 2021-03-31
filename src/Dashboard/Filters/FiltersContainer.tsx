import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';
import { LanguageContext } from '../../Language/LanguageProvider';
import Filters from './Filters';
import FiltersMobile from './FiltersMobile';

const useStyles = makeStyles((theme) => ({
  filtersContainer: { paddingTop: 50, paddingBottom: 15 },
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
  filtersMobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  filtersBlock: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
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
      <div className={classes.filtersMobile}>
        <FiltersMobile />
      </div>

      <div className={classes.filtersBlock}>
        <Filters />
      </div>
    </Container>
  );
}
