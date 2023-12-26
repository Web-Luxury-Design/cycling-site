import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="./img/wings_488629.png" alt="logo" />
        <h2>apidura</h2>
      </div>
      <ul className="nav">
        <li>innovation</li>
        <li>inspiration</li>
        <li>shop</li>
      </ul>
      <div className="panier">
        <ul className="icon">
          <li>
            <i class="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i class="fa-brands fa-facebook-f"></i>
          </li>
          <li>
            <i class="fa-brands fa-github"></i>
          </li>
        </ul>
        <div className="button">
          <button>$0</button>
          <button>0 items</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
