import React, { useState, useEffect } from "react";
import './db.css';

function DynamicBackground() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorX(event.clientX);
      setCursorY(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cursorStyle = {
    filter: `blur(5px) brightness(${0.5 + (cursorX + cursorY) / (window.innerWidth + window.innerHeight)} )`,
  };

  return (
    <>
      <div className="background-layer2" style={cursorStyle}></div>
      {/* Your portfolio content goes here */}
    </>
  );
}

export default DynamicBackground;
