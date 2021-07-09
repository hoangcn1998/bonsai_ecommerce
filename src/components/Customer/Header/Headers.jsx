import React, { useState } from "react";
import logo from "../../../assests/images/logo-header.jpeg";
import ModalCart from "./Modal/Cart/Cart";
import LoginRegister from "./Modal/register/LoginRegister";
import ModalMenu from "./Modal/Menu/Menu";
import NavMenu from "./NavMenu/NavMenu";
import "./style.scss";
import { Link } from "react-router-dom";

function Header(props) {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  function onToggleCart() {
    setShowCart(!showCart);
  }

  function onToggleMenu() {
    if (onHandleToggleMenu) {
      onHandleToggleMenu();
    }
  }

  function onToggleSignIn() {
    setShowSignIn(!showSignIn);
  }

  function onHandleToggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="header ">
      <div
        className={showCart ? "header__overlay" : ""}
        onClick={onToggleCart}
      ></div>
      <div
        className={showMenu ? "menu__overlay" : ""}
        onClick={onToggleMenu}
      ></div>
      <div
        className={showSignIn ? "signin__overlay" : ""}
        onClick={onToggleSignIn}
      ></div>
      <img src={logo} alt="Logo Header" className="header__logo" />
      <NavMenu></NavMenu>
      <div className="header-group">
        <span>
          <input
            type="text"
            className="header-group__search"
            placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Search..."
          />
        </span>
        <div className="header-group__cart">
          <Link to='/ShoppingCart'>
          <i className="fa fa-shopping-basket" aria-hidden="true" />
          </Link>
          <div className="header-group__cart--count">2</div>
        </div>
        <div className="header-group__cart  header-group__cart-mobile" onClick={onToggleCart}>
          <i className="fa fa-shopping-basket" aria-hidden="true" />
          <div className="header-group__cart--count">2</div>
        </div>
        <div className="header-group__collap header-group__collap-mobile " onClick={onToggleMenu}>
          <i className="fa fa-bars" aria-hidden="true" />
        </div>
        <div className="header-group__collap">Thong</div>
        <div className="header-group__collap" onClick={onToggleSignIn}>
          <i className="fa fa-sign-in" aria-hidden="true"></i>
        </div>
      </div>
      <LoginRegister
        showSignIn={showSignIn}
        onToggleSignIn={onToggleSignIn}
      ></LoginRegister>
      <ModalCart showCart={showCart} onToggleCart={onToggleCart} />
      <ModalMenu showMenu={showMenu} onHandleToggleMenu={onHandleToggleMenu} />
    </div>
  );
}

export default Header;
