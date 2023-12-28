import React, { useState, useEffect } from 'react';
import Data from '../../../../Database/data';
import "./banner.css";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Data.banner.length - 1 ? 0 : prevIndex + 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Data.banner.length - 1 : prevIndex - 1));
  };

  const currentData = Data.banner[currentIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000); 

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="slide-container">
      {/* <button onClick={prevSlide}>Previous</button> */}
      <div>
        <img src={currentData.img} alt={`Banner ${currentIndex + 1}`} className="shop-img-banner"/>
      </div>
      {/* <button onClick={nextSlide}>Next</button> */}
    </div>
  );
};

export default Banner;
