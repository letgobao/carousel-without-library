/** @format */

import React, { useState } from "react";
import Slide from "../slide/Slide";

import "./Carousel.css";
const Carousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = data.length;
  const handleNext = () => {
    setCurrentSlide(
      currentSlide === length - 1 ? 0 : currentSlide + 1
    );
  };
  const handlePrev = () => {
    setCurrentSlide(
      currentSlide === 0 ? length - 1 : currentSlide - 1
    );
  };
  return (
    <section className='carousel'>
      <button
        className='prev-btn'
        onClick={handlePrev}>
        <i className='fa fa-chevron-left'></i>
      </button>
      <button
        className='next-btn'
        onClick={handleNext}>
        <i className='fa fa-chevron-right'></i>
      </button>
      <div className='slider'>
        {data.map((item, index) => (
          <Slide
            goPrev={handlePrev}
            goNext={handleNext}
            key={index}
            content={item}
            display={currentSlide === index}
          />
        ))}
      </div>
      <div className='dots'>
        {data.map((item, index) => (
          <div
            onClick={() => {
              setCurrentSlide(index);
            }}
            key={index}
            className={
              currentSlide === index ? "dot active" : "dot"
            }></div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
