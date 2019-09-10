import React from "react";

import icon from "../../assets/icon.png";
import logo from "../../assets/logo.png";
import "./styles.css";

const Header = () => (
  <header id="main-header">
    <img src={logo} />
    <div className="go-to-profile">
      <a href="#">Meu perfil</a>
      <img src={icon} />
    </div>
  </header>
);

export default Header;
