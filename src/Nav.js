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
            <span>Cat Facts</span>
          </Link>
        </li>
        <li>
          <Link to="/quotes">
            <span>Breaking Bad Quotes</span>
          </Link>
        </li>
        <li>
          <Link to="/potter">
            <span>Harry potter</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
