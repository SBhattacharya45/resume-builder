import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import MainNavigation from "./components/NavBar/MainNavigation/MainNavigation";
import Home from "./containers/Home";

import FormContainer from "./containers/FormContainer/FormContainer";
import TemplatePage from "./containers/Templates/TemplatePage";
import Preview from './containers/Preview/Preview';


function App() {
  return (
    <div className="App">
      <MainNavigation />

      <main className="main">
        <Switch>
          <Route path="/form">
            <FormContainer />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/templates">
            <TemplatePage />
          </Route>
          <Route path="/preview">
            <Preview />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default withRouter(App);
