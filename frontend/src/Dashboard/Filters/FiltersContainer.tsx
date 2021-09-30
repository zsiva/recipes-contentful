import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { LanguageContext } from '../../Language/LanguageProvider';
import { FiltersContext } from './FiltersProvider';
import { mealTypes, dietTypes } from '../../utils/chipTypes';

const useStyles = makeStyles((theme) => ({
  filtersContainer: {
    paddingBottom: 30
  },
  select: {
    minWidth: 150,
    paddingRight: 10
  }
}));

export default function FiltersContainer() {
  const { localizedContent } = useContext(LanguageContext);
  const { toggleFilters, filter } = useContext(FiltersContext);

  const classes = useStyles();

  const handleChange = (event: any) => {
    toggleFilters(event.target.value);
  };

  return (
    <Container className={classes.filtersContainer}>
      <FormControl variant="outlined" className={classes.select}>
        <InputLabel id="diet-label">{localizedContent.dietType}</InputLabel>
        <Select labelId="diet-label" label={localizedContent.dietType} onChange={handleChange} value={filter}>
          {dietTypes.map(dietType => <MenuItem key={dietType.label} value={dietType.label}>{localizedContent[dietType.label]}</MenuItem>)}
          <MenuItem value=''>{localizedContent.clear}</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.select} disabled>
        <InputLabel id="diet-label">{localizedContent.foodType}</InputLabel>
        <Select labelId="diet-label" label={localizedContent.foodType} value=''>
          {mealTypes.map(mealType => <MenuItem key={mealType.label} value={mealType.label}>{localizedContent[mealType.label]}</MenuItem>)}
          <MenuItem value=''>{localizedContent.clear}</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
}
