import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavBar = ({ title, icon }) => {
  return (
    <div className='navbar bg-primary'>
      <h3>
        <i className={icon} /> {title}
      </h3>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
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
