import React from "react";
import "./style.scss";
import logo from "../../../assests/images/logo-header.jpeg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row footer__contact">
          <div className="footer__contact--logo">
            <img
              alt="img"
              src="http://landing.engotheme.com/html/hamadryad/demo/images/homepage2/logo-footer.jpg"
            ></img>
          </div>
          <div className="footer__contact--address">
            <i className="fa fa-home" aria-hidden="true"></i>
            <span>
              Address: PO Box 16122 Collins
              <br /> Street West Victoria 8007, Australia
            </span>
          </div>
          <div className="footer__contact--email">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <span>
              Email:
              <br /> Contact@hamadryad.com
            </span>
          </div>
          <div className="footer__contact--phone">
            <i className="fa fa-mobile" aria-hidden="true"></i>
            <span>
              Phone:
              <br /> (+84) 123 456 7890
            </span>
          </div>
        </div>
        <div className="row footer__info">
          <div className="footer__info--copyright">
            Copyright &copy; 2019 by EngoTheme All Rights Reserved
          </div>
          <div className="footer__info--payment">
            Payment Options:
            <img
              alt="img"
              src="http://landing.engotheme.com/html/hamadryad/demo/images/homepage2/payment.jpg"
            />
          </div>
          <div className="footer__info--social">
            Follow us:
            <a href="#1111">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#1111">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#1111">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#1111">
              <i className="fa fa-youtube-square" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
