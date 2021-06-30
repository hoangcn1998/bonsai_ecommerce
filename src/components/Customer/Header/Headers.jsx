import PropTypes from "prop-types";
import React, { useState } from "react";
import logo from '../../../assests/images/logo-header.jpeg';
import ModalCart from "./Modal/Cart/Cart";
import ModalMenu from "./Modal/Menu/Menu";
import "./style.scss";

function Header(props) {

  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function onToggleCart() {
    setShowCart(!showCart);
  }

  function onToggleMenu() {
    if (onHandleToggleMenu) {
      onHandleToggleMenu();
    }
  }

  function onHandleToggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="header">
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
      <ModalCart showCart={showCart} onToggleCart={onToggleCart} />
      <ModalMenu showMenu={showMenu} onHandleToggleMenu={onHandleToggleMenu} />
    </div>
  )
}

export default Header;
