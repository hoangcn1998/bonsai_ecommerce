import React from 'react';
import "./style.scss";
import ContentPage from '../page/ContentPage';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const LoginRegister = (prop) => {

    const { showSignIn, onToggleSignIn } = prop;
    console.log(showSignIn)
    console.log(onToggleSignIn)

    function setStyle() {
      if (showSignIn) {
        return {
          transform: "translateX(0%)",
          transition: "all 0.3s",
        }
      } else {
        return {
          transform: "translateX(100%)",
          transition: "all 0.3s",
        }
      }
    }
  
    function onHandleClick() {
      if (onToggleSignIn) {
        onToggleSignIn();
      }
    }
  
    return (
        <div className="form__signin" style={setStyle()}>
            <i className="fa fa-times form__signin--close" aria-hidden="true" onClick={onHandleClick}></i>
            <p className='form__signin--title'>Join With Ours</p>
            <div className='form__content'>
                <div className='button__group'>
                    <Link to='/'>
                        <button type="button" className="button__group--login">Login</button>
                    </Link>
                    <Link to='/Register'>
                        <button type="button" className="button__group--register">Register</button>
                    </Link>
                </div>
                <ContentPage></ContentPage>
                <button type="button" className="button__submit">Login</button><br></br>
                <div className="login__faceBook">Or login with<a href="#">FaceBook</a></div>
           </div>
        </div>
    );
};

export default LoginRegister;