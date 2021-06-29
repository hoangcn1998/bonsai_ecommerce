import PropTypes from "prop-types";
import React, { useState } from "react";
import logo from "../../../assests/images/logo-header.jpeg";
import Cart from "./Cart/Cart";
import "./style.scss";

Header.propTypes = {
  onHandleToggleMenu: PropTypes.func,
  showMenu: PropTypes.bool,
}

Header.defaultProps = {
  onHandleToggleMenu: null,
  showMenu: false,
}

function Header(props) {
  const { onHandleToggleMenu, showMenu } = props;
  const [showCart, setShowCart] = useState(false);

  function onToggleCart() {
    setShowCart(!showCart);
  }

  function onToggleMenu() {
    if (onHandleToggleMenu) {
      onHandleToggleMenu();
    }
  }

  return (
    <div className="header">
      <div className={showCart ? "header__overlay" : ""} onClick={onToggleCart}></div>
      <div className={showMenu ? "menu__overlay" : ""} onClick={onToggleMenu}></div>
      <img src={logo} alt="Logo Header" className="header__logo" />
      <ul className="header__menu">
        <li className="header__menu--item">Home</li>
        <li className="header__menu--item">Shop</li>
        <li className="header__menu--item">Features</li>
        <li className="header__menu--item">Portfolio</li>
        <li className="header__menu--item">Blog</li>
        <li className="header__menu--item">About Us</li>
      </ul>
      <div className="header-group">
        <span>
          <input type="text" className="header-group__search" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Search..." />
        </span>
        <div className="header-group__cart" onClick={onToggleCart}>
          <i className="fa fa-shopping-basket" aria-hidden="true" />
          <div className="header-group__cart--count">2</div>
        </div>
        <div className="header-group__collap" onClick={onToggleMenu}>
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
      </div>
      <Cart showCart={showCart} onToggleCart={onToggleCart} />
    </div>
  )
}

export default Header;
