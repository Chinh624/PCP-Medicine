import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/pages/Home/home";
import Shop from "./components/pages/Shop/Shop";
import AboutUs from "./components/pages/AboutUs/Aboutus";
import OurTherapies from "./components/pages/OurTherapies/Ourtherapies";
import ExploreMedicine from "./components/pages/Detail/Explore";
import Event from "./components/pages/Event/eventchaevent";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="events" element={<Event />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="explore" element={<ExploreMedicine />} />
        <Route path="ourtherapies" element={<OurTherapies />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
