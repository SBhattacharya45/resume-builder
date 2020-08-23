import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import MainNavigation from "./components/NavBar/MainNavigation/MainNavigation";
import Home from "./containers/Home";

import FormContainer from "./containers/FormContainer/FormContainer";

function App() {
  return (
    <div className="App">
      <MainNavigation />

      <main className="main">
        <Switch>
          <Route path="/form">
            <FormContainer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default withRouter(App);
