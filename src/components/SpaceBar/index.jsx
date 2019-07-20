import React, { useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { press } from '../../assets/assets';

const SpaceBar = ({ count }) => {
  const [sawTooltip, setSawTooltip] = useLocalStorage('tooltip', false);
  useEffect(() => {
    if (count >= 3) {
      setSawTooltip(true);
    }
  }, [count, setSawTooltip]);

  return (
    <>
      {!sawTooltip && (
        <div className="content__spacebar">
          <img src={press} width="10" alt="Press spacebar" /> Space to swap sign
        </div>
      )}
    </>
  );
};

export default SpaceBar;
