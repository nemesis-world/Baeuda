import React from 'react';
import logo from '../../assets/img/logo-white.svg';
import './Popup.css';

const Popup = () => {
  const now = new Date();
  const thisYear = now.getUTCFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <h2>Credits</h2>
        <p>Voice over: Daniel Kim</p>
        <p>Design / Dev: Julien Henrotte</p>
        <h2>Special Thanks</h2>
        <p>Julie 박현정, Yumin 강유민</p>
        <a
          className="App-link"
          href="https://itsnemesis.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <p>© {thisYear} - All rights reserved.</p>
      </header>
    </div>
  );
};

export default Popup;
