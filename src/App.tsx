import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import MenuBar from './Menu/MenuBar';
import './App.css';
import {
  LanguageContext,
  useLanguageContextValue,
} from './Language/LanguageProvider';

export default function App() {
  const languageContextValue = useLanguageContextValue();
  return (
    <LanguageContext.Provider value={languageContextValue}>
      <Router>
        <MenuBar />
        <Switch>
          <Route path='/'>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </LanguageContext.Provider>
  );
}
