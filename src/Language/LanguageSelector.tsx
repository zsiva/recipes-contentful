import React, { useContext } from 'react';
import { makeStyles, Select, MenuItem } from '@material-ui/core';
import { LanguageContext } from './LanguageProvider';

const useStyles = makeStyles(() => ({
  select: { padding: '5px 10px', background: 'white', borderRadius: 5 },
}));

const LanguageSelector = () => {
  const classes = useStyles();
  const { userLocale, setUserLocale } = useContext(LanguageContext);

  const setLocale = (value: string) => {
    setUserLocale(value);
  };

  return (
    <Select
      className={classes.select}
      labelId='outlined-label'
      id='select-outlined'
      value={userLocale}
      onChange={(event) => setLocale(event.target.value as string)}
      label='Language'
    >
      <MenuItem value='en-US'>EN</MenuItem>
      <MenuItem value='es'>ES</MenuItem>
    </Select>
  );
};

export default LanguageSelector;
