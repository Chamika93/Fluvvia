import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import AccountPage from "../Account";
import * as ROUTES from "../../constants/routes";
import "./index.css";
import { TourProvider } from "../../context";
import Landing from "../../pages/Landing";
import Tours from "../../pages/Tours";
import SingleTour from "../../pages/SingleTour";
import { withAuthentication } from "../Session";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }
  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <TourProvider>
        <Router>
          <div>
            <Navigation authUser={this.state.authUser} />
            <hr />
            <Route exact path={ROUTES.LANDING} component={Landing} />
            <Route path={ROUTES.HOME} component={Tours} />
            <Route path="/tour/:slug" component={SingleTour} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route
              path={ROUTES.PASSWORD_FORGET}
              component={PasswordForgetPage}
            />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          </div>
        </Router>
      </TourProvider>
    );
  }
}

export default withAuthentication(App);
