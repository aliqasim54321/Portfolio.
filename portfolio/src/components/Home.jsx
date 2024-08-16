import React from "react";
import Button from "react-bootstrap/Button";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>
              Welcome To <span style={{ color: "#6c63ff" }}>Ali Qasim</span>{" "}
            </h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              libero dolor veritatis nesciunt provident ipsum rerum enim rem qui
              velit illo doloremque repellat ratione tempora, consequuntur,
              atque fugit ullam necessitatibus
            </p>
            <div className="btn_div mt-4">
              <Button
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
