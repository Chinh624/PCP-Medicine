import React from "react";
import "./ourtherapies.css";
import Data from "../../../../Database/data";
function OurTherapies() {
  return (
    <body>
      <div className="header-therapy">
        <h1>Our Therapies - PCP Medicine</h1>
      </div>

      <div className="therapy-section">
        {Data.ourtherapies.map((ourtherapy) => (
          <div className="therapy-card" key={ourtherapy.id}>
            <h2>{ourtherapy.name}</h2>
            <p>{ourtherapy.description}</p>
          </div>
        ))}
      </div>


    </body>
  );
}

export default OurTherapies;
