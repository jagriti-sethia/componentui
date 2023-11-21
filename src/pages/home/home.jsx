import React from "react";
import "./home.css";
// import heroImage from "../../assets/heroImage.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-container">
        
        <div className="hero-content">
          <h1>
            Build <span>Clean</span> and <span>Responsive</span> website using{" "}
            <span>Component UI</span>
          </h1>
          <p>
            <span>Component UI</span> is a lightweight, user friendly, highly
            customizable utility based <span>component library</span> so every
            developer can make a unique web page.
          </p>
          <div className="home-btns">
            <button onClick={() => navigate("/components")}>
              <span>Get Started</span>
            </button>
            {/* <button onClick={() => navigate("/installation")}>
              <span>Installation</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;