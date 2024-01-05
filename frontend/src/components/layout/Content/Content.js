import React from "react";
import "./content.css";
import Informationsection from "../Content/section/Informationsection";
import Ouremployees from "../Content/ouremployees/Ouremployees";
import ContactUs from "../Content/contactcus/Contactus";
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
