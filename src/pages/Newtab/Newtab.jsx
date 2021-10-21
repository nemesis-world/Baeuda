import React, { useState } from 'react';
import {
  Header,
  Footer,
  Helpers,
  Navigation,
  Randomizer,
  CheatSheet,
} from '../../components';
import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
  const [currentContent, setCurrentContent] = useState(0);

  const updateCurrent = (value) => {
    setCurrentContent(value);
  };

  return (
    <main className="app">
      <Header />
      <Navigation setCurrentNavItem={updateCurrent} />
      <div className="content">{currentContent === 0 && <Randomizer />}</div>
      <div className="content">{currentContent === 1 && <CheatSheet />}</div>
      {currentContent === 0 && (
        <>
          <Footer />
          <Helpers />
        </>
      )}
    </main>
  );
};

export default Newtab;
