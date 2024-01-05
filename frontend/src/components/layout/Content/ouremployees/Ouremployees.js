import React from "react";
import "../content.css";
import Data from "../../../../mock/data";

function Ouremployees() {
  return (
    <div className="ouremployees">
      <div className="ouremployees-text-title">Life at Medicine</div>
      <div className="ouremployees-information">
        {Data.information.map((information) => {
          return (
            <div className="container-information">
              <img src={information.img} className="information-image" />
              <div className="information-name">{information.name}</div>
              <div className="information-service">{information.service}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ouremployees;
