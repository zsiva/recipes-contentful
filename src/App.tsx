import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import MenuBar from './Menu/MenuBar';
import './App.css';

export default function App() {
  return (
    <Router>
      <MenuBar />
      <Switch>
        <Route path='/'>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}
