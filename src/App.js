import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Plane from './components/Plane/Plane';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <div className="wrapper_content">
        <Header />
        <div className="container content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/plane" component={Plane} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
