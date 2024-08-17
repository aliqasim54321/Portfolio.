import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div
        className="container mb3 about_container"
        style={{ minHeight: "100%" }}
      >
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>Meet Ali Qasim</h2>
            <p
              style={{
                color: "#666",
                letterSpacing: ".5px",
                marginTop: 2,
                lineHeight: 2,
              }}
            >
              As a Full Stack JavaScript developer with a robust background in
              consulting, I excel in crafting web applications. My core
              expertise lies in JavaScript, with significant professional
              experience in React Web, React Native, and Node.js. I am also
              skilled in leveraging Redux and Storybook to boost project
              efficiency and maintainability. Driven by a passion for
              innovation, I am dedicated to staying updated with the latest
              technological advancements in the field.
            </p>
          </div>
          <div className="right_container mt-3">
            <img src="./images/Ali.jpg" alt="Ali Qasim" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
