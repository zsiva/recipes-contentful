import { Eco, Cake, Fastfood, LocalBar, FreeBreakfast } from '@material-ui/icons';
import { green, blue, orange, red, purple } from '@material-ui/core/colors';

export const dietTypes = [
    { label: 'vegan', icon: <Eco />, color: green[400] },
    { label: 'vegetarian', icon: <Eco />, color: green[600] },
  ];
  
  export const mealTypes = [
    { label: 'breakfast', icon: <FreeBreakfast />, color: orange[400] },
    { label: 'meal', icon: <Fastfood />, color: red[400] },
    { label: 'dessert', icon: <Cake />, color: purple[400] },
    { label: 'drinks', icon: <LocalBar />, color: blue[400] },
  ];