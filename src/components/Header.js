import React from "react";
import { useState } from "react";
import logo from "../assets/yum-yard-logo.png";
import { Link } from "react-router-dom";

// function loggedIn() {
// An API will authenticate whether user is pre-registered or not==> Based on it returns true/false.
//   return false;
// }

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-between md:flex-row bg-slate-600 shadow-md text-white">
      <div>
        <a href="/">
          <img className="h-20 p-3" alt="logo" src={logo} />
        </a>
      </div>
      <div className="flex justify-center">
        <ul className="flex p-6 text-lg font-medium">
          <Link to="/">
            <li className="px-6 hover:text-yellow-400">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-6 hover:text-yellow-400">About</li>
          </Link>
          <Link to="/blog">
            <li className="px-6 hover:text-yellow-400">Blog</li>
          </Link>
          <Link to="/contact">
            <li className="px-6 hover:text-yellow-400">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-6 hover:text-yellow-400">InstaMart</li>
          </Link>
        </ul>
      </div>
      <div className="flex justify-center">
        <Link to="/cart">
          <li className="px-2 hover:text-yellow-400 list-none">Cart</li>
        </Link>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}> Log Out </button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}> Log In </button>
        )}
      </div>
    </div>
  );
};

export default Header;

// behind the scene, react-router-dom is using <a> tag for <Link> but keeping a track of changes--> see in console
