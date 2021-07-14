import React from "react";
import { useState } from "react";
import FormLogin from "../register/FormLogin";
import FormRegister from "../register/FormRegister";
import "./style.scss";

const LoginRegister = (prop) => {
  const { showSignIn, onToggleSignIn } = prop;
  const [showLogin, setShowLogin] = useState(true);

  function setStyle() {
    if (showSignIn) {
      return {
        transform: "translateX(0%)",
        transition: "all 0.3s",
      };
    } else {
      return {
        transform: "translateX(150%)",
        transition: "all 0.3s",
      };
    }
  }

  function onHandleClick() {
    if (onToggleSignIn) {
      onToggleSignIn();
    }
  }

  return (
    <div className="form__signin" style={setStyle()}>
      <i
        className="fa fa-times form__signin--close"
        aria-hidden="true"
        onClick={onHandleClick}
      ></i>
      <p className="form__signin--title">Join With Ours</p>
      <div className="form__content">
        <div className="button__group">
          <button
            onClick={() => setShowLogin(true)}
            type="button"
            className="button__group--login"
          >
            Login
          </button>
          <button
            onClick={() => setShowLogin(false)}
            type="button"
            className="button__group--register"
          >
            Register
          </button>
        </div>
        <div>
          {showLogin && (
            <FormLogin
              onToggleSignIn={onToggleSignIn}
              onCloseModal={onHandleClick}
            />
          )}
        </div>
        <div>{!showLogin && <FormRegister />}</div>
        {/* <div className="login__faceBook">
          Or login with<a href="facebook.com">FaceBook</a>
        </div> */}
      </div>
    </div>
  );
};

export default LoginRegister;
