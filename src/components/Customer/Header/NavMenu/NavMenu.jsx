import React from "react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <ul className="header__menu">
      <li className="header__menu--item">
        <Link to="/HomePage">Home</Link>
      </li>

      <li className="header__menu--item">
        <Link to="/ShopPage">Shop</Link>
      </li>

      <li className="header__menu--item">Features</li>
      <li className="header__menu--item">Portfolio</li>
      <li className="header__menu--item">Blog</li>
      <li className="header__menu--item">About Us</li>
    </ul>
  );
};

export default NavMenu;
