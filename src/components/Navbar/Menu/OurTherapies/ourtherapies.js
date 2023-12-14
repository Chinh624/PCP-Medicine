import React from "react";
import "./ourtherapies.css";
import Data from "../../../../Database/Product.json";
function OurTherapies() {
  return (
    <body>
      <div className="header-therapy">
        <h1>Our Therapies - PCP Medicine</h1>
      </div>
      <div className="container-therapy-card">
      {Data.product.map((ourtherapies) => (
        <div className="therapy-section">
          <div className="therapy-card" key={ourtherapies.id}>
            <img src={ourtherapies.img} className="ourtherapies-img"/>
            <h2>{ourtherapies.name}</h2>
            <p>{ourtherapies.allocate}</p>
          </div>
          </div>
        ))}
      </div>
    </body>
  );
}

export default OurTherapies;
