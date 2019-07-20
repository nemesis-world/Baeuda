import React from 'react';

import { logo } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://itsnemesis.com/" title="Nemesis">
        <img src={logo} alt="Nemesis" width="40" />
      </a>
    </footer>
  );
};

export default Footer;
