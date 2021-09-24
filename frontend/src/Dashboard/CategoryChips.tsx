import React, { useState } from 'react';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles, Chip } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  root: { padding: 15 },
  chip: { marginRight: 5 },
  active: { backgroundColor: `${green[500]} !important`, color: '#fff' },
}));

function CategoryChips() {
  const classes = useStyles();
  const [showCategory, setCategory] = useState(false);
  const toggleCategory = () => setCategory(!showCategory);

  return (
    <div className={classes.root}>
      <Chip
        onClick={toggleCategory}
        label='Vegetarian'
        clickable
        className={
          showCategory ? `${classes.active} ${classes.chip}` : classes.chip
        }
        deleteIcon={<DoneIcon />}
      />
      <Chip label='Vegan' className={classes.chip} />
    </div>
  );
}

export default CategoryChips;
