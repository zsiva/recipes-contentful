import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Container,
  InputAdornment,
  FormControl,
  OutlinedInput,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { RecipesContext } from './Recipes/RecipesProvider';
import { LanguageContext } from '../Language/LanguageProvider';

const bannerImg =
  'https://images.ctfassets.net/b1kxdns6lgrg/6VaL3qyAnjPyx4nrxLHU0U/ae5600b1913d0cd5602bf523719c8ca0/banner3_1_.jpg';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundSize: 'cover',
    padding: '50px 0px 65px',
    backgroundImage: `url(${bannerImg})`,
    backgroundPositionX: 'center',
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: '2em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5em',
    },
  },
  input: { backgroundColor: 'white' },
}));

export default function Banner() {
  const { setStringSearch } = useContext(RecipesContext);
  const { localizedContent } = useContext(LanguageContext);
  const classes = useStyles();
  const setString = (value: string) => {
    setStringSearch(value);
  };

  return (
    <div className={classes.heroContent}>
      <Container maxWidth='sm'>
        <Typography
          className={classes.title}
          component='h1'
          align='center'
          gutterBottom
        >
          {localizedContent.bannerTitle}
        </Typography>
        <FormControl fullWidth variant='outlined' className={classes.input}>
          <OutlinedInput
            onChange={(e) => setString(e.target.value)}
            placeholder='Search…'
            id='outlined-search'
            startAdornment={
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Container>
    </div>
  );
}
