import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Chip } from '@material-ui/core';
import { Cake, Fastfood, LocalBar } from '@material-ui/icons';
import { FiltersContext } from './FiltersProvider';
import { LanguageContext } from '../../Language/LanguageProvider';

const useStyles = makeStyles((theme) => ({
  filters: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  },
  label: { lineHeight: '2rem', marginLeft: 20, fontWeight: 'bold' },
}));

const categories = [
  { label: 'lunch', icon: <Fastfood /> },
  { label: 'drinks', icon: <LocalBar /> },
  { label: 'dessert', icon: <Cake /> },
];

export default function FiltersCategory() {
  const { filter } = useContext(FiltersContext);
  const { localizedContent } = useContext(LanguageContext);
  const classes = useStyles();

  return (
    <div className={classes.filters}>
      <Typography className={classes.label}>
        {localizedContent.category}
      </Typography>
      {categories.map((cat) => (
        <Chip
          key={cat.label}
          label={localizedContent[cat.label]}
          color={filter === cat.label ? 'secondary' : 'default'}
          disabled
          icon={cat.icon}
        />
      ))}
    </div>
  );
}
