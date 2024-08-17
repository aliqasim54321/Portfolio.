import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Ali Qasim</h4>
            <p>© {year} Ali Qasim All rights reserved</p>
            <p className="d-flex">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook mx-3"></i>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>
              I'm Ali Qasim Khundmiri Syed, a passionate web developer with a
              background in electronics and cybersecurity. I enjoy building
              innovative projects that solve real-world problems.
            </p>
            <p>aliqasimkhundmiri17@gmail.com</p>
            <p>+91 012345678</p>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <p>Resume</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
