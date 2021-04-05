import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { LanguageContext } from '../../Language/LanguageProvider';
import Filters from './Filters';
import FiltersDietType from './FiltersDietType';

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
  label: {
    lineHeight: '2rem',
    fontWeight: 'bold',
    [theme.breakpoints.up('xs')]: {
      marginLeft: 20,
    },
  },
  accordion: {
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
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='mobile-filters'
          id='mobile-filters'
        >
          <Typography align='center' gutterBottom>
            <span>{localizedContent.dietType}</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FiltersDietType />
        </AccordionDetails>
      </Accordion>
      <div className={classes.filtersBlock}>
        <Filters />
      </div>
    </Container>
  );
}
