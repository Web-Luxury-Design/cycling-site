import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="contain">
          <h3>about us</h3>
          <ul>
            <li>Concept</li>
            <li>Company</li>
            <li>Materiels & Design</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="contain">
          <h3>bikepacking</h3>
          <ul>
            <li>Ambassadeurs</li>
            <li>aventures</li>
            <li>Fonctionnalités spéciales</li>
          </ul>
        </div>
        <div className="contain">
          <h3>shop</h3>
          <ul>
            <li>front Packs</li>
            <li>poor Packs</li>
            <li>Frame Packs & Design</li>
            <li>Accessoires</li>
          </ul>
        </div>
        <div className="contain">
          <h3>contactez-nous</h3>
          <ul>
            <li>Shipping</li>
            <li>service personnalisé</li>
            <li>Materiels & Design</li>
            <li>Careers</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="logo-footer">
          <div className="logo">
            <img src="./img/wings_488629.png" alt="logo" />
            <h2>apidura</h2>
          </div>
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
        </div>
      </div>
      <div className="signature-infos">
        <p className="apidura">a^pidrua site custom servies</p>
        <div className="signature">
          <p>
            {" "}
            create by <span>WebLuxury Design</span>
          </p>
        </div>
        <ul className="terme">
          <li>Terme dere</li>
          <li>pocicy pricate</li>
          <li>shipping</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
