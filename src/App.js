import React from "react";
import { Routes, Route} from "react-router-dom";
import Header from "./components/Header/header";  
import Content from "./components/Content/content";
import Shop from "./components/Navbar/Menu/Shop/shop";
import Aboutus from "./components/Navbar/Menu/AboutUs/aboutus";
import Ourteam from "./components/Navbar/Menu/OurTeam/ourteam";
import OurTherapies from "./components/Navbar/Menu/OurTherapies/ourtherapies";
import ExploreMedicine from "./components/Navbar/Menu/Explore/explore";
import Footer from "./components/Footer/footer";
import EventchaEvent from "./components/Navbar/Menu/Event/eventchaevent";
import Login from "./components/Navbar/Menu/User/Login";
// import Cart from "./components/Navbar/Menu/Shop/Cart/cart";
function App() {
  return (
    <>
        <div>
          <Header />
          {/* <Login/> */}
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/event" element={<EventchaEvent/>} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/ourteam" element={<Ourteam />} />
            <Route path="/explore" element={<ExploreMedicine />} />
            <Route path="/ourtherapies" element={<OurTherapies />} />
          </Routes>
          <Footer />
        </div>
    </>
    
  );
}

export default App;
