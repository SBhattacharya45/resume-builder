import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import MainNavigation from "./components/NavBar/MainNavigation";
import Home from "./containers/Home";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/form">
            <h1>This is through routing</h1>
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
