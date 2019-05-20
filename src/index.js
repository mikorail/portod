import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";
import * as serviceWorker from './serviceWorker';
import Index from "views/Index.jsx";
import LandingPage from "views/examples/LandingPage.jsx";
import ContactPage from "views/examples/ContactPage.jsx";
import ProfilePage from "views/examples/ProfilePage.jsx";
import PortoPage from "views/examples/PortoPage.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={props => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/contact-page"
        render={props => <ContactPage {...props} />}
      />
      <Route
        path="/porto-page"
        render={props => <PortoPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.register();