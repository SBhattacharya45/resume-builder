import React from 'react';
import {Route, Switch , withRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './containers/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/form" >
            <h1>This is through routing</h1>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default withRouter(App);
