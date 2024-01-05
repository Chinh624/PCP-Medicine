import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
function Home({Children}) {
  return (
    <>
      <Header />
      <main>{Children}</main>
      <Footer />
    </>
  );
}

export default Home;
