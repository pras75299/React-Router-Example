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
            <li>Cat Facts</li>
          </Link>
        </li>
        <li>
          <Link to="/quotes">
            <li>Breaking Bad Quotes</li>
          </Link>
        </li>
        <li>
          <Link to="/potter">
            <li>Harry potter</li>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
