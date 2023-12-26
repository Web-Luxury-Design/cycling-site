import React from "react";
import Footer from "./Footer";

const Page2 = () => {
  return (
    <div className="page2">
      <div className="page2-container">
        <div className="cards-container1">
          <div className="card">
            <img src="./img/biker-jumping-flying-hill.jpg" alt="image card" />
            <div className="card-text">
              <h4>ambassadeurs</h4>
              <button>learn more</button>
            </div>
          </div>
          <div className="card">
            <img src="./img/biker-jumping-flying-hill.jpg" alt="image card" />
            <div className="card-text">
              <h4>shop</h4>
              <button>learn more</button>
            </div>
          </div>
          <div className="card">
            <img src="./img/biker-jumping-flying-hill.jpg" alt="image card" />
            <div className="card-text">
              <h4>aventure</h4>
              <button>learn more</button>
            </div>
          </div>
        </div>
        <div className="cards-container2">
          <div className="card">
            <img src="./img/biker-jumping-flying-hill.jpg" alt="image card" />
            <div className="card-text">
              <h4>matériels & design</h4>
              <button>learn more</button>
            </div>
          </div>
          <div className="card">
            <img src="./img/biker-jumping-flying-hill.jpg" alt="image card" />
            <div className="card-text">
              <h4>fonctionnalités spéciales</h4>
              <button>learn more</button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-infos">
        Apidura is diving the evolution in ultralight cycling anf opening a new
        world of riding possilities for passionate cyclists
      </p>
      <Footer />
    </div>
  );
};

export default Page2;
