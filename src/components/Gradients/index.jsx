import React from 'react';
import './index.scss';

const Gradients = ({ firstGradient, secondGradient }) => {
  return (
    <>
      <div className="gradient">
        <span
          style={{
            background: firstGradient,
          }}
        ></span>
        <span></span>
      </div>
      <div className="gradient gradient--right">
        <span
          style={{
            background: secondGradient,
          }}
        ></span>
        <span></span>
      </div>
    </>
  );
};

export default Gradients;
