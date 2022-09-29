/** @format */

import React, { useState } from "react";
import "./Slide.css";
const Slide = ({ content, display, goNext, goPrev }) => {
  const [position, setPosition] = useState(0);
  const handleMouseDown = (e) => {
    setPosition(e.nativeEvent.pageX);
  };
  const handleMouseUp = (e) => {
    if (e.nativeEvent.pageX < position) {
      goNext();
    } else if (e.nativeEvent.pageX > position) {
      goPrev();
    }
  };
  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={display ? "slide" : "no-display"}>
      {content}
    </div>
  );
};

export default Slide;
