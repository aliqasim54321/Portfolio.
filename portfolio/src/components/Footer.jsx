import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Ali Qasim</h4>
            <p>As a Full Stack JavaScript developer with a robust background in
            consulting, I excel in crafting web applications.</p>
             <p>© {year} Ali Qasim All rights reserved</p>
            <p className="d-flex">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook mx-3"></i>
            </p>
          
          </div>
          <div className="second mt-5">
            <h4>Subcribe to my mail</h4>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">aliqasimkhundmi17@gmail.com</a>
          </div>
          <div className="third mt-5">
            <h4>Quick Links</h4>
            <Nav className="Nav-footer">
              <NavLink to="/" className="text-decoration-none">
                Home
              </NavLink>
              <NavLink to="/about" className="text-decoration-none">
                About
              </NavLink>
              <NavLink to="/project" className="text-decoration-none">
                Project
              </NavLink>
              <NavLink to="/contact" className="text-decoration-none">
                Contact
              </NavLink>
            </Nav>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Footer;
