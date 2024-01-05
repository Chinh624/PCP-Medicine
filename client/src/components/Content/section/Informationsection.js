import React from "react";
import "../content.css";
import ButtonClick from "../../Button/button";
import Triangle from "../../../image/image/Triangle.png";
import Specialties from "../specialties/Specialties";

function Informationsection() {
  return (
    <div>
      <div className="rectangle-background">
        <div>
          <img
            src={Triangle}
            alt="Triangle Logo"
            className="rectangle-background-img"
          />
        </div>

        <div className="container-rectangle-background">
          <div className="rectangle-background-text">FOR A BETTER TOMORROW</div>

          <div>
            <a href="/ourtherapies">
              <ButtonClick text="Our Therapies" />
            </a>
          </div>
        </div>
      </div>

      <div className="information-section">
        <div className="container-information-section-text">
          <div>
            <div>
              <div className="section-text-quantity">
                With more than
                <div className="section-text-quantity-number">1000+</div>
              </div>
            </div>

            <div>
              <div className="section-text-quantity">
                products with
                <div className="section-text-quantity-number">20000+</div>
              </div>
            </div>
            <div>
              <div className="section-text-quantity">employees</div>
            </div>
          </div>

          <div>
            <a href="/explore">
              <ButtonClick text="Explore" />
            </a>
          </div>
        </div>

        <div className="information-section-specialties">
          <Specialties />
        </div>
      </div>

      {/* <Route path="/ourtherapies" component={OurTherapies} />
        <Route path="/explore" component={ExploreMedicine} /> */}
    </div>
  );
}

export default Informationsection;
