import React from "react";
import "./aboutus.css";
import "../../layout/Content/ourteam/ourteam.css";
import OurTeam from "../../layout/Content/ourteam/Ourteam";
import Banner from "../../layout/Content/banner/Banner";

export default function Aboutus() {
  return (
    <div className="body-aboutus">
      <div class="title-aboutus">About Us - PCP Medicine</div>

      <div class="section-aboutus">
        <h2>Our Mission</h2>
        <p>
          We are dedicated to improving the health and well-being of people by
          providing high-quality and accessible medicines. Our mission is to
          make a positive impact on global healthcare through innovation,
          research, and compassionate care.
        </p>
      </div>

      <div class="section-aboutus">
        <h2>Our Team</h2>
        <p>
          Meet our team of experienced healthcare professionals, pharmacists,
          researchers, and support staff. We work together to ensure that our
          products meet the highest standards of safety and efficacy.
        </p>
      </div>

      <div class="section-aboutus">
        <h2>Quality Assurance</h2>
        <p>
          At Medicine World, we prioritize the quality and safety of our
          products. Our manufacturing processes adhere to strict regulatory
          standards, and we continuously strive to improve and innovate to meet
          the evolving needs of our customers.
        </p>
      </div>
      <Banner />

      <OurTeam />
    </div>
  );
}
