import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <div className="content">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
