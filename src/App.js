import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
