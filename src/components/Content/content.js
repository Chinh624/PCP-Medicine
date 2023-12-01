import React from "react";
import "./content.css";

import Informationsection from "./section/informationsection";
import Ouremployees from "./ouremployees.js/ouremployees";
import ContactUs from "./contactcus/contactus";
import Aboutus from "./aboutus/aboutus";
function Content() {
  return (
    <div>
      <Aboutus/>
      <Informationsection />
      <ContactUs />
      <Ouremployees />
    </div>
  );
}

export default Content;
