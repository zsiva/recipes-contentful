import React, { useContext } from 'react';
import { makeStyles, Select, MenuItem } from '@material-ui/core';
import { LanguageContext, Language } from './LanguageProvider';

export const languageOptions = [
  { key: 'en-US', value: 'English' },
  { key: 'es', value: 'Español' },
];

const useStyles = makeStyles(() => ({
  select: { padding: '5px 10px', background: 'white', borderRadius: 5 },
}));

const LanguageSelector = () => {
  const classes = useStyles();
  const { userLocale, setUserLocale } = useContext(LanguageContext);

  const setLocale = (value: Language) => {
    setUserLocale(value);
  };

  return (
    <Select
      className={classes.select}
      labelId='outlined-label'
      id='select-outlined'
      value={userLocale}
      onChange={(event) => setLocale(event.target.value as Language)}
      label='Language'
    >
      {languageOptions.map((lan) => (
        <MenuItem value={lan.key}>{lan.value}</MenuItem>
      ))}
    </Select>
  );
};

export default LanguageSelector;
