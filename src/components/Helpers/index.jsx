import React, { useState, useCallback } from 'react';
import { info } from '../../assets/assets';
import './index.scss';

const Helpers = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showHide = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  return (
    <section className="helpers">
      <button onClick={showHide}>
        <img src={info} width="18" alt="Info" />
      </button>
      {isVisible && (
        <div className="block">
          <div className="kbd">
            <span>Spacebar</span>
            <p>To change sign</p>
          </div>
          <div className="kbd">
            <span>P</span>
            <p>Play sound</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Helpers;
