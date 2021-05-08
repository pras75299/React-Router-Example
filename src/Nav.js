import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.svg';

function Nav() {
  return (
    <nav className="navbar">
      <h2>
        <Link to="/"><img className="logoImage" src={logo} alt="Logo" /></Link>
      </h2>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/cats">
           Cat Facts
          </Link>
        </li>
        <li>
          <Link to="/quotes">
            Breaking Bad
          </Link>
        </li>
        <li>
          <Link to="/harry-potter">
            Harry potter
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
