import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import MenuBar from './Menu/MenuBar';
import './App.css';
import {
  LanguageContext,
  useLanguageContextValue,
} from './Language/LanguageProvider';
import RecipePage from './Dashboard/Recipes/RecipePage';
import { RecipesContext } from './Dashboard/Recipes/RecipesProvider';
import { useRecipesContextValue } from './Dashboard/Recipes/useRecipesContextValue';

export default function App() {
  const languageContextValue = useLanguageContextValue();
  const recipesContextValue = useRecipesContextValue();
  return (
    <LanguageContext.Provider value={languageContextValue}>
      <Router>
        <MenuBar />
        <RecipesContext.Provider value={recipesContextValue}>
          <Switch>
            <Route path='/:slug'>
              <RecipePage />
            </Route>
            <Route path='/'>
              <Dashboard />
            </Route>
          </Switch>
        </RecipesContext.Provider>
      </Router>
    </LanguageContext.Provider>
  );
}
