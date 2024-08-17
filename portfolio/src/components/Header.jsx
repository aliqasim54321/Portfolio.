import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  const common = {
    marginRight: 15,
    fontSize: 17,
    letterSpacing: ".5px",
  };
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <div className="">
            <h2 className="mt-2 h2_right" style={{ color: "#6C63FF" }}>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                Ali Qasim 
              </NavLink>
            </h2>
          </div>
          <Nav className="">
            <div className="mt-2">
              <NavLink to="/" className="text-decoration-none" style={common}>
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-decoration-none"
                style={common}
              >
                About
              </NavLink>
              <NavLink
                to="/project"
                className="text-decoration-none"
                style={common}
              >
                Project
              </NavLink>
              <NavLink
                to="/contact"
                className="text-decoration-none"
                style={common}
              >
                Contact
              </NavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
