import React from "react";
import Button from "react-bootstrap/Button";
import "./Home.css";
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>
              Welcome To <span style={{ color: "#6c63ff" }}>Ali Qasim Portfolio</span>{" "}
            </h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>
              As a Full Stack JavaScript developer with a robust background in
              consulting, I excel in crafting web applications. My core
              expertise lies in JavaScript, with significant professional
              experience in React Web, React Native, and Node.js. I am also
              skilled in leveraging Redux and Storybook to boost project
              efficiency and maintainability. Driven by a passion for
              innovation, I am dedicated to staying updated with the latest
              technological advancements in the field.
            </p>
            <div className="btn_div mt-4">
            <NavLink
                to="/project"> <Button 
                
                variant="danger"
                style={{
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: 4,
                  background: "#2f2d69",
                  marginRight: 24,
                }}
              >
                Project
              </Button>
              </NavLink>
            </div>
          </div>
          <div className="right_div">
            <img src="./images/home.jpg" alt="the images is loding" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
