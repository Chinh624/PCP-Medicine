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
        {Data.ourtherapies.map((ourtherapies) => (
          <div className="therapy-card" key={ourtherapies.id}>
            <h2>{ourtherapies.name}</h2>
            <p>{ourtherapies.description}</p>
          </div>
        ))}
      </div>
    </body>
  );
}

export default OurTherapies;
