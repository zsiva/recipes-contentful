import React, { useContext } from 'react';
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FiltersDietType from './FiltersDietType';
import FiltersMealType from './FiltersMealType';
import { LanguageContext } from '../../Language/LanguageProvider';

export default function FiltersMobile() {
  const { localizedContent } = useContext(LanguageContext);

  return (
    <>
      <Accordion>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='mobile-filters'
          id='mobile-filters'
        >
          <Typography align='center' gutterBottom>
            <span>{localizedContent.foodType}</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FiltersMealType />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
