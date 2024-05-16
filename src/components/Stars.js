import React from 'react';
import './Stars.css'; // Assuming you have a CSS file named Stars.css for styling

const Stars = () => {
  // Function to generate multiple box shadows
  const multipleBoxShadow = (n) => {
    let value = `${random(2000)}px ${random(2000)}px #FFF`;
    for (let i = 2; i <= n; i++) {
      value += `, ${random(2000)}px ${random(2000)}px #FFF`;
    }
    return value;
  };

  // Random number generator
  const random = (max) => {
    return Math.floor(Math.random() * max);
  };

  // Define box shadows
  const shadowsSmall = multipleBoxShadow(700);
  const shadowsMedium = multipleBoxShadow(200);
  const shadowsBig = multipleBoxShadow(100);

  return (
    <div>
      <div id="stars" className="stars" style={{ boxShadow: shadowsSmall }} />
      <div id="stars2" className="stars" style={{ boxShadow: shadowsMedium }} />
      <div id="stars3" className="stars" style={{ boxShadow: shadowsBig }} />
    </div>
  );
};

export default Stars;
