import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Plane from './components/Plane/Plane';
import Footer from './components/Footer/Footer';
import CV from './components/CV/CV';
import Contacts from './components/Contacts/Contacts';

const App = () => {
  return (
    <>
      <div className="wrapper_content">
        <Header />
        <div className="container content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/plane" component={Plane} />
            <Route exact path="/cv" component={CV} />
            <Route exact path="/contacts" component={Contacts} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
