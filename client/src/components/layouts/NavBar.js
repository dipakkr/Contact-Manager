import React, { useContext, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const NavBar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user, logout } = authContext;

  console.log(isAuthenticated);

  const handleLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li> Hello {user && user.name}</li>
      <li>
        <a onClick={handleLogout} href="#!">
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>

      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h3>
        <i className={icon} /> {title}
      </h3>

      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

NavBar.defaultProps = {
  title: "Contact Manager",
  icon: "fas fa-id-card-alt"
};

export default NavBar;
