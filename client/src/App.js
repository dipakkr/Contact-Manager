import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Alerts from "./components/layouts/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

import ContactProvider from "./context/contact/ContactState";
import AuthProvider from "./context/auth/authState";
import AlertProvider from "./context/alert/alertState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  return (
    <AuthProvider>
      <ContactProvider>
        <AlertProvider>
          <Router>
            <Fragment>
              <NavBar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </ContactProvider>
    </AuthProvider>
  );
}

export default App;
