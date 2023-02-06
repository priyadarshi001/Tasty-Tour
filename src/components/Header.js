import React from "react";
import { useState, useContext } from "react";
import logo from "../assets/yum-yard-logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContex";
import cart from "../assets/cart.svg";
import LoginButton from "./LoginButton";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // instead of hardcoded, an API call will be made which will authenticate a user.

  const { user } = useContext(UserContext); // received user object

  return (
    <nav className=" bg-white">
      <div className="max-w-6xl mx-auto py-2 px-4 font-semibold">
        <div className="flex justify-between items-center text-gray-700">
          {/** logo */}
          <div>
            <a href="/">
              <img className="h-14 p-3" alt="logo" src={logo} />
            </a>
          </div>

          {/** nav items */}
          <div className="flex justify-center items-center space-x-8">
            <Link to="/" className="hover:text-gray-900">
              {" "}
              Home{" "}
            </Link>
            <Link to="/about" className="hover:text-gray-900">
              {" "}
              About{" "}
            </Link>
            <Link to="/blog" className="hover:text-gray-900">
              {" "}
              Blog{" "}
            </Link>
            <Link to="/contact" className="hover:text-gray-900">
              {" "}
              Contact{" "}
            </Link>
            <Link to="/instamart" className="hover:text-gray-900">
              {" "}
              InstaMart{" "}
            </Link>
          </div>

          {/** cart & rest */}
          <div className="flex justify-center items-center space-x-4">
            <Link to="/cart" className="hover:text-gray-900">
              <img src={cart} alt="cart" className="h-6 w-6" />
            </Link>
            <div>
              <span className="relative inline-block p-2 font-medium text-gray-600">
                <span
                  className={`absolute top-2 left-1 h-2 w-2 rounded-full ${
                    isLoggedIn ? "bg-green-500" : "bg-red-600"
                  }`}
                ></span>
                {user.name}
              </span>
            </div>
            {isLoggedIn ? (
              <LoginButton
                text="Log Out"
                onClick={() => setIsLoggedIn(false)}
              />
            ) : (
              <LoginButton text="Log In" onClick={() => setIsLoggedIn(true)} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

// behind the scene, react-router-dom is using <a> tag for <Link> but keeping a track of changes--> see in console

// LEARNING:
    // how to write ternary operator within a className.
    // changed the repeating code by making a loginButton [see changes in code from previous commit]
