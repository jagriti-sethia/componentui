import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./navbar.css";
// import logo from "../../assets/sigma.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const components = [
    "avatar",
    "alert",
    "badge",
    "button",
    "card",
    "headings",
    "text",
    "image",
  ];

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      if (components.includes(searchInput.toLowerCase())) {
        navigate(`/components/${searchInput.toLowerCase()}`);
      } else {
        alert("Sorry, no such component found!");
      }
    }
    setSearchInput("");
  };

  return (
    <nav className="navbar">
      <div className="left-nav" onClick={() => navigate("/")}>
        {/* <img src={logo} alt="logo" /> */}
        <h2>Component UI</h2>
      </div>
      <div className="middle-nav">
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search components..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearch}><i className="fas fa-search"></i> Search</button>
        </div>
      </div>
      <div className="right-nav">
        <h4 onClick={() => navigate("/")}>Home</h4>
        
       
        <h4 onClick={() => navigate("/components")}>Components</h4>
        <Link to="https://github.com/jagriti-sethia/componentui" target="_blank">
        
        <FaGithub title="GitHub" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;