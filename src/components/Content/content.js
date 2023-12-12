import React from "react";
import "./content.css";
// import Banner from "../Navbar/Menu/Banner/banner";
import Informationsection from "./section/informationsection";
import Ouremployees from "./ouremployees.js/ouremployees";
import ContactUs from "./contactcus/contactus";
function Content() {
  return (
    <div>
      <Informationsection />
      {/* <Banner/> */}
      <ContactUs />
      <Ouremployees />
    </div>
  );
}

export default Content;
