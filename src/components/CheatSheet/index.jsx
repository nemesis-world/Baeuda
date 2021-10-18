import React from 'react';
import './index.scss';

import { korean } from '../../assets/alphabet/korean.js';

const CheatSheet = () => {
  const gridElement = korean.map((item, index) => {
    return (
      <span className="grid__item" key={index}>
        {item.letter}
      </span>
    );
  });

  return <section className="grid">{gridElement}</section>;
};

export default CheatSheet;
