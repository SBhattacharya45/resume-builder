import React from 'react';
import {Route, Switch , withRouter} from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Home from './containers/Home';
import FormContainer from './containers/FormContainer/FormContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/form">
          <FormContainer />
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default withRouter(App);
