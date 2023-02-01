import React from "react";
import { useState } from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

// function loggedIn() {
        // An API will authenticate whether user is pre-registered or not==> Based on it returns true/false.
//   return false;
// }



const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <a href="/">
        <img className="logo" alt="logo" src={logo} />
      </a>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}> Log Out </button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}> Log In </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;


// behind the scene, react-router-dom is using <a> tag for <Link> but keeping a track of changes--> see in console
