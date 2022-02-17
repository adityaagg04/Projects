import React from "react";
import troll_face from "./images/troll-face.png";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={troll_face} alt="Not Rendering" className="logo-image" />
        <h1 className="logo-text">Meme Generator</h1>
      </div>
      <p>React Course - Project 3</p>
    </header>
  );
};

export default Header;
