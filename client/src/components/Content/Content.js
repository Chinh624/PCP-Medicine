import React from "react";
import "./content.css";
import Informationsection from "./section/Informationsection";
import Ouremployees from "./ouremployees/Ouremployees";
import ContactUs from "./contactcus/Contactus";
function Content() {
  return (
    <main>
      <Informationsection />
      <ContactUs />
      <Ouremployees />
    </main>
  );
}

export default Content;
