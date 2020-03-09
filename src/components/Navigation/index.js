import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { Button } from "semantic-ui-react";
import logo from "../../images/logo.png";

const Navigation = ({ authUser }) => (
  <div>
    {authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />}
  </div>
);

const NavigationAuth = props => (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/">
          <img src={logo} alt="Beach-Resort" />
        </Link>
      </div>
      <ul className="nav-links">
        <li className="single-link">
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li className="single-link">
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li className="single-link">
          <SignOutButton />
        </li>
      </ul>
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Link to="/">
          <img src={logo} alt="Beach-Resort" />
        </Link>
      </div>
      <ul className="nav-links">
        <li className="single-link">
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_IN}>
            <Button basic color="black">
              Sign In
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
