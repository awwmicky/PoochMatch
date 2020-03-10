import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

import "./assets/reset.css";
import "./assets/App.css";

import { RouteAuthenticate , RoutePrivate } from './auth/Route.js';

// import ___ from "./components/___/___.js";
import Header from "./components/Header/Header.js";

// import ___ from "./views/___/___.js";
import HomePage from "./views/HomePage/HomePage.js";
import MainPage from "./views/MainPage/MainPage.js";
import AuthPage from "./views/AuthPage/AuthPage.js";
import UserPage from "./views/UserPage/UserPage.js";
import ErrorPage from "./views/ErrorPage/ErrorPage.js";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/main">
            <MainPage />
          </Route>

          <RouteAuthenticate 
            exact 
            path="/user/auth/:entry" 
            component={ AuthPage } 
          />

          <RoutePrivate 
            path="/user" 
            component={ UserPage }
          />

          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
