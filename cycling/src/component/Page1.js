import React from "react";
import Header from "./Header";

const Page1 = () => {
  return (
    <div className="page1">
      <Header />
      <div className="page1-container">
        <h4>
          leading <span>the</span> evolution <span>in</span>
        </h4>
        <h1>ultralight</h1>
        <h4>cycling</h4>
        <i class="fa-sharp fa-solid fa-angle-down"></i>
      </div>
    </div>
  );
};

export default Page1;
